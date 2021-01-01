import anime from 'animejs';
import { MathFunc } from '../utils/Utils';

export default class Timeline {
  /**
   *
   * @param {HTMLElement} element contents
   * @param {THREE.Vector2} resolution window size
   */
  constructor(element, resolution) {
    this.timeline = anime.timeline({
      autoplay: false,
      duration: 10000,
      easing: 'easeOutSine',
    });
    this.isTouched = false;
    this.element = element;
    this.resolution = resolution;
    this.percentage = 0;
    this.maxHeight =
      (this.element.clientHeight || this.element.offsetHeight) -
      window.innerHeight;
    this.event = {
      y: 0,
      deltaY: 0,
    };
    this.touchStartY = 0;
  }

  scroll() {
    const event = this.event;
    const scroll = event.y + event.deltaY;
    const adjustedScroll = MathFunc.clamp(scroll, 0, this.maxHeight);

    this.event.y = adjustedScroll;
  }

  touchStart(e) {
    this.isTouched = true;
    const t = e.targetTouches ? e.targetTouches[0] : e;
    this.touchStartY = t.pageY;
  }

  touchMove(e) {
    if (!this.isTouched) return;
    const t = e.targetTouches ? e.targetTouches[0] : e;
    const pageY = t.pageY;
    this.event.deltaY = (pageY - this.touchStartY) * 5;
    this.touchStartY = pageY;
    this.scroll();
  }

  touchEnd(e) {
    this.isTouched = false;
  }

  wheel(e) {
    this.event.deltaY = e.deltaY;
    this.scroll();
  }

  update() {
    this.percentage = MathFunc.lerp(0.7, this.event.y, this.percentage);
    console.log(this.percentage);
  }

  resize(resolution) {
    this.resolution = resolution;
    this.maxHeight =
      (this.element.clientHeight || this.element.offsetHeight) -
      window.innerHeight;
  }
}
