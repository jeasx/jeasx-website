import IconHeroStage from "../icons/IconHeroStage.svg";
import RecipeExample from "./RecipeExample.mdx";

export default function HeroStage() {
  return (
    <div class="hero">
      <div class="hero-inner">
        <div class="hero-grid">
          <div class="hero-intro">
            <img
              alt=""
              fetchPriority="high"
              width="530"
              height="530"
              decoding="async"
              class="hero-blur hero-blur-intro"
              style="color: transparent"
              src="/images/blur-cyan.avif"
            />
            <div class="hero-text">
              <p class="hero-title">The Ease of JSX with the power of SSR</p>
              <p class="hero-lead">
                The developer experience of asynchronous JSX with the proven benefits of server-side
                rendering, resulting in a robust and streamlined web development approach.
              </p>
              <div class="hero-actions">
                <a class="button button-primary" href="/quickstart">
                  Get started
                </a>
                <a class="button button-secondary" href="https://expo.jeasx.dev">
                  Learn by examples
                </a>
              </div>
            </div>
          </div>
          <div class="hero-example">
            <div class="hero-stage">{{ html: IconHeroStage }}</div>
            <div class="hero-window">
              <img
                alt=""
                fetchPriority="high"
                width="530"
                height="530"
                decoding="async"
                class="hero-blur hero-blur-cyan"
                style="color: transparent"
                src="/images/blur-cyan.avif"
              />
              <img
                alt=""
                fetchPriority="high"
                width="567"
                height="567"
                decoding="async"
                class="hero-blur hero-blur-indigo"
                style="color: transparent"
                src="/images/blur-indigo.avif"
              />
              <div class="hero-glow hero-glow-blurred"></div>
              <div class="hero-glow"></div>
              <div class="hero-panel">
                <div class="hero-panel-line-top"></div>
                <div class="hero-panel-line-bottom"></div>
                <div class="hero-panel-body">
                  <div class="hero-tabs">
                    <div class="hero-tab">
                      <div class="hero-tab-label">[recipe].jsx</div>
                    </div>
                  </div>
                  <div class="hero-code">
                    <RecipeExample />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
