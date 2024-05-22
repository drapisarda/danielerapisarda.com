<template>
  <div class="animation">
    <canvas ref="canvas" class="animation__bg"></canvas>
    <div ref="main" class="animation__main">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue'
import debounce from 'debounce'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  TorusGeometry,
  SphereGeometry,
  MeshBasicMaterial,
  type Material,
} from 'three'

const main = ref<HTMLDivElement>()
const canvas = ref<HTMLCanvasElement>()
const torusBaseOpacity = 0.5
let torus: Mesh
let world: Mesh
let renderer: WebGLRenderer
let camera: PerspectiveCamera
let maxScrollHeight = 0
const torusBaseZ = 0
const cameraBaseZ = 30
const worldBaseY = -35
const maxOpacity = 0.2
const mainColor = '#FF124F'

const getScrollTop = () => {
  if (!main.value || !main.value.children[0]) return 0
  return -main.value.children[0].scrollTop
}

const animate = (scene: Scene) => {
  requestAnimationFrame(() => animate(scene))

  const scrollTop = getScrollTop()
  // console.log(scrollTop)
  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01
  torus.position.z = torusBaseZ + scrollTop * 0.1
  ;(torus.material as Material).opacity = Math.min(
    maxOpacity,
    torusBaseOpacity * ((scrollTop + maxScrollHeight) / maxScrollHeight),
  )

  world.rotation.x -= -0.01

  renderer.render(scene, camera)
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  maxScrollHeight = main.value
    ? Math.min(main.value.scrollHeight, window.innerHeight) * 6.5
    : 0
}

const createTorus = () => {
  const geometry = new TorusGeometry(10, 3, 16, 50)
  const material = new MeshBasicMaterial({
    color: mainColor,
    wireframe: true,
    transparent: true,
    opacity: torusBaseOpacity,
  })

  torus = new Mesh(geometry, material)
  torus.position.set(13, 10, torusBaseZ + getScrollTop() * 0.1)
  return torus
}

const createWorld = () => {
  const worldGeometry = new SphereGeometry(25, 12, 12)
  const worldMaterial = new MeshBasicMaterial({
    color: mainColor,
    wireframe: true,
    transparent: true,
    opacity: maxOpacity,
  })

  world = new Mesh(worldGeometry, worldMaterial)
  world.position.set(0, worldBaseY, 0)
  return world
}

onMounted(() => {
  const scene = new Scene()
  camera = new PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    500,
  )
  renderer = new WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
  })

  renderer.setClearColor(0xff0000, 0) // the default
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.position.setZ(cameraBaseZ)

  world = createWorld()
  torus = createTorus()
  scene.add(world)
  scene.add(torus)

  onWindowResize()
  animate(scene)

  if (window) {
    window.addEventListener('resize', debounce(onWindowResize, 1000), false)
  }
})

onUnmounted(() => {
  if (window) {
    window.removeEventListener('resize', debounce(onWindowResize, 1000), false)
  }
})
</script>

<style lang="scss">
.animation {
  &__bg {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;

    background-image: linear-gradient(
      0deg,
      hsl(275deg 81% 12%) 0%,
      hsl(273deg 81% 12%) 16%,
      hsl(271deg 81% 11%) 24%,
      hsl(270deg 81% 10%) 30%,
      hsl(268deg 81% 10%) 35%,
      hsl(266deg 81% 9%) 40%,
      hsl(264deg 81% 9%) 45%,
      hsl(263deg 81% 8%) 50%,
      hsl(261deg 81% 8%) 55%,
      hsl(259deg 81% 7%) 60%,
      hsl(258deg 81% 6%) 65%,
      hsl(256deg 81% 6%) 70%,
      hsl(254deg 81% 5%) 76%,
      hsl(252deg 81% 5%) 84%,
      hsl(251deg 81% 4%) 100%
    );
  }

  &__main {
    min-height: 100svh;
  }
}
</style>
