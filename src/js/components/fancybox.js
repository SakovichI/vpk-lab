import { Fancybox } from "@fancyapps/ui";

window.addEventListener("load", () => {
  Fancybox.bind("[data-fancybox='video']", {
    Carousel: {
      Arrows: {
        prevTpl: `<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6992 7.5001C15.6992 7.04446 15.3299 6.6751 14.8742 6.6751L3.17251 6.6751L7.74603 2.31978C8.07447 2.00398 8.08471 1.48172 7.76891 1.15328C7.4531 0.824845 6.93084 0.814604 6.6024 1.13041L0.552404 6.90541C0.39064 7.06095 0.299218 7.27568 0.299218 7.5001C0.299218 7.72451 0.39064 7.93924 0.552404 8.09478L6.6024 13.8698C6.93084 14.1856 7.4531 14.1753 7.76891 13.8469C8.08471 13.5185 8.07447 12.9962 7.74603 12.6804L3.17251 8.3251L14.8742 8.3251C15.3299 8.3251 15.6992 7.95573 15.6992 7.5001Z" fill="white" />
</svg>`,
        nextTpl: `<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.300781 7.5001C0.300781 7.04446 0.670146 6.6751 1.12578 6.6751L12.8275 6.6751L8.25397 2.31978C7.92553 2.00398 7.91529 1.48172 8.23109 1.15328C8.5469 0.824845 9.06916 0.814604 9.3976 1.13041L15.4476 6.90541C15.6094 7.06095 15.7008 7.27568 15.7008 7.5001C15.7008 7.72451 15.6094 7.93924 15.4476 8.09478L9.3976 13.8698C9.06916 14.1856 8.5469 14.1753 8.23109 13.8469C7.91529 13.5185 7.92553 12.9962 8.25397 12.6804L12.8275 8.3251L1.12578 8.3251C0.670146 8.3251 0.300781 7.95573 0.300781 7.5001Z" fill="white" />
</svg>`,
      },
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
      Video: {
        html5videoTpl: `<video class="f-html5video" playsinline muted controls controlsList="nodownload">
    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
      },
    },
  });

  Fancybox.bind("[data-fancybox='certificates']", {
    Carousel: {
      classes: {
        container: "certificates-carousel",
      },
      Arrows: false,
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    },
  });
});
