<template>
  <div>
    <canvas id="bg" ref="canvas"></canvas>
    <div ref="main" class="main-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, onUnmounted } from 'vue'
import debounce from 'debounce'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  TorusGeometry,
  SphereGeometry,
  MeshBasicMaterial,
} from 'three'

const main = ref<HTMLDivElement>()
const canvas = ref<HTMLCanvasElement>()
const torusBaseOpacity = 0.5
let torus: Mesh
let world: Mesh
let renderer: WebGLRenderer
let maxScrollHeight = 0
const torusBaseZ = 0
const cameraBaseZ = 30
const worldBaseY = -35
const maxOpacity = 0.2
const mainColor = '#FF124F'

const scrollTop = computed((): number => {
  if (!main.value) return 0
  return -main.value.scrollTop
})

const animate = (scene: Scene, camera: PerspectiveCamera) => {
  requestAnimationFrame(() => animate(scene, camera))

  const { scrollTop } = document.documentElement
  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01
  torus.position.z = torusBaseZ - scrollTop * 0.1
  torus.material.opacity = Math.min(
    maxOpacity,
    torusBaseOpacity * ((scrollTop + maxScrollHeight) / maxScrollHeight),
  )

  world.rotation.x -= -0.01

  renderer.render(scene, camera)
}

const onWindowResize = (camera: PerspectiveCamera) => {
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
  torus.position.set(13, 10, torusBaseZ + scrollTop.value * 0.1)
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
  const camera = new PerspectiveCamera(
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

  onWindowResize(camera)
  animate(scene, camera)

  if (window) {
    window.addEventListener(
      'resize',
      debounce(() => onWindowResize(camera), 1000),
      false,
    )
  }
})
onUnmounted(() => {
  if (window) {
    window.removeEventListener('resize')
  }
})
</script>

<style lang="scss">
#bg {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
}

.main-content {
  position: absolute;
  width: 100%;
  max-width: none;
}
</style>
