<template>
  <div>
    <Animation>
      <div class="main-content">
        <section class="container">
          <h1>
            Hi! I'm <br />
            <span class="neon_color">Daniele Rapisarda</span>
          </h1>
          <h2>
            a Front End Engineer <br />
            based in Berlin, Germany
          </h2>
          <LogosBar />
        </section>
        <section id="technologies" ref="technologies" class="container">
          <h3>Technologies I like to play with</h3>
          <ul>
            <li>JavaScript - <em> > 8 years of experience </em></li>
            <li>VueJs & Nuxt - <em> > 4 years of experience </em></li>
            <li>HTML - <em> > 8 years of experience </em></li>
            <li>CSS & SCSS - <em> > 8 years of experience </em></li>
            <li>PHP - <em> > 8 years of experience </em></li>
          </ul>
        </section>

        <section id="serenegrove" ref="serenegrove" class="container">
          <h3>SereneGrove</h3>
          <p>
            SereneGrove is an experimental project made to give the meditation
            community a tool to make meditation easy and accessible.
          </p>
          <ul class="links links--h">
            <li>
              <a href="https://www.serenegrove.com/" target="_blank"
                >Visit SereneGrove</a
              >
            </li>
            <li>
              <a
                href="https://github.com/drapisarda/serenegrove/"
                target="_blank"
                >SereneGrove on GitHub</a
              >
            </li>
          </ul>
        </section>

        <section id="projects" ref="projects" class="container">
          <h3>Small projects</h3>
          <ul class="links">
            <li>
              <a
                href="http://www.danielerapisarda.com/visualizeblocks/"
                target="_blank"
                >Visualize Blocks</a
              >
              - Where I play with GitHub commits data and ThreeJs
            </li>
            <li>
              <a
                href="https://openprocessing.org/sketch/1370769"
                target="_blank"
                >Planets</a
              >
              - a p5js experiment...
            </li>
            <li>
              <a href="http://www.danielerapisarda.com/bolle/" target="_blank"
                >Bolle</a
              >
              ...and another one...
            </li>
            <li>
              <a
                href="https://openprocessing.org/sketch/1477453"
                target="_blank"
                >Quadri</a
              >
              ...and another one
            </li>
          </ul>
        </section>

        <section id="contact-links" ref="contact" class="container">
          <h3>You can know more about me here</h3>
          <ul class="links links--h">
            <li>
              <a
                href="https://www.linkedin.com/in/danielerapisarda/"
                target="_blank"
                >LinkedIn</a
              >
            </li>
            <li>
              <a href="https://github.com/drapisarda/" target="_blank"
                >GitHub</a
              >
            </li>
          </ul>
        </section>
      </div>
    </Animation>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import '../style/vars';

.main-content {
  max-width: none;
  text-align: center;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;

  > section {
    scroll-snap-align: start;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
