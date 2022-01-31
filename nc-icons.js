import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import '@polymer/iron-icon/iron-icon.js';

class NcIcons extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <iron-iconset-svg size="24" name="nc-icons">
        <svg id="drawer" data-name="drawer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#2e79bd;}.cls-2{fill:#2d3e50;}</style></defs><title>n</title><path class="cls-1" d="M31.647,49.78879h21.7829a2.33388,2.33388,0,0,0,0-4.66776h-.778V9.39345a1.95367,1.95367,0,0,0-1.95371-1.95371H34.37873A1.95372,1.95372,0,0,0,32.425,9.39345V45.121h-.69926a2.38631,2.38631,0,0,0-2.39329,2.02949A2.33539,2.33539,0,0,0,31.647,49.78879Z"/><polygon class="cls-1" points="122.27 93.028 122.26 93.028 122.252 93.028 5.749 93.028 5.741 93.028 5.731 93.028 2.274 93.028 2.274 122.591 125.726 122.591 125.726 93.028 122.27 93.028"/><path class="cls-2" d="M112.37209,58.98127V37.606a3.97163,3.97163,0,0,0-3.96761-3.96452H84.48535V19.41321H94.164a1.96253,1.96253,0,0,0,1.96249-1.96256V7.37145A1.96248,1.96248,0,0,0,94.164,5.409H68.52622a1.96253,1.96253,0,0,0-1.96256,1.96249v10.0792a1.96259,1.96259,0,0,0,1.96256,1.96256h9.6786v14.2283H55.45338v5.44576h51.47295V55.79165H21.0769V39.08727h8.5482V33.64151H19.59566A3.96893,3.96893,0,0,0,15.63121,37.606V58.975L2.27515,88.36015H125.725ZM34.43914,81.20293H28.21545a2.95626,2.95626,0,0,1,0-5.91253h6.22369a2.95626,2.95626,0,0,1,0,5.91253Zm0-9.33553H28.21545a2.95626,2.95626,0,0,1,0-5.91253h6.22369a2.95626,2.95626,0,0,1,0,5.91253ZM56.222,81.20293H49.99835a2.95626,2.95626,0,0,1,0-5.91253H56.222a2.95626,2.95626,0,0,1,0,5.91253Zm0-9.33553H49.99835a2.95626,2.95626,0,0,1,0-5.91253H56.222a2.95626,2.95626,0,0,1,0,5.91253Zm21.7829,9.33553H71.78125a2.95626,2.95626,0,1,1,0-5.91253h6.22369a2.95626,2.95626,0,0,1,0,5.91253Zm0-9.33553H71.78125a2.95626,2.95626,0,1,1,0-5.91253h6.22369a2.95626,2.95626,0,0,1,0,5.91253Zm21.78283,9.33553H93.56409a2.95626,2.95626,0,0,1,0-5.91253h6.22369a2.95626,2.95626,0,1,1,0,5.91253Zm0-9.33553H93.56409a2.95626,2.95626,0,0,1,0-5.91253h6.22369a2.95626,2.95626,0,1,1,0,5.91253Z"/></svg>
        <svg id="wallet" data-name="wallet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#2d3e50;}.cls-2{fill:#2e79bd;}</style></defs><title>n</title><path class="cls-1" d="M118.07724,36.0939a3.16335,3.16335,0,0,0-3.16988-3.16985H101.16016v6.3397h13.74721A3.16808,3.16808,0,0,0,118.07724,36.0939Z"/><path class="cls-1" d="M24.29414,55.32385a8.03723,8.03723,0,0,1-7.87863-6.48775,7.5491,7.5491,0,0,1-.1503-1.56585,8.2069,8.2069,0,0,1,8.20167-8.0065h2.3757V32.924H24.52969A14.58853,14.58853,0,0,0,9.92326,47.4183c.018,1.78346,0,7.37837,0,8.69746v62.63646a7.35013,7.35013,0,0,0,7.329,7.329h93.4982a7.34822,7.34822,0,0,0,7.32678-7.329V102.84466H86.8117A15.41654,15.41654,0,0,1,71.40216,87.19508a15.56345,15.56345,0,0,1,15.6406-15.17175h31.03447V56.11576a7.70264,7.70264,0,0,0-.04039-.79191Z"/><path class="cls-2" d="M75.36168,87.43287a11.46259,11.46259,0,0,0,11.45,11.45h31.26554V75.98731H86.8117A11.4602,11.4602,0,0,0,75.36168,87.43287Zm18.87776-2.95673a3.09806,3.09806,0,1,1,0,6.19612h-6.8826a3.09806,3.09806,0,0,1,0-6.19612Z"/><path class="cls-2" d="M45.15277,1.91875h-5.568a7.80671,7.80671,0,0,0-7.80686,7.80684v40.0729H45.15277Z"/><path class="cls-2" d="M96.22255,9.72559A7.80622,7.80622,0,0,0,88.418,1.91875H55.49237V49.79849H96.22255ZM88.8599,33.27176a2.65587,2.65587,0,0,1-2.65614,2.65613H79.974a2.65776,2.65776,0,0,1-2.65833-2.65613V11.95548A2.65775,2.65775,0,0,1,79.974,9.29937h6.22978a2.65586,2.65586,0,0,1,2.65614,2.65611Z"/></svg>
        <svg id="discount_1" data-name="discount_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-percent"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
        <svg id="discount_2" data-name="discount_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#2d3e50;}</style></defs><title>n</title><path class="cls-1" d="M73.18732,80.98979a3.15019,3.15019,0,0,0-3.09825-4.172,7.41442,7.41442,0,0,0-7.31694,6.3705,3.15591,3.15591,0,0,0,3.181,3.64787A7.37207,7.37207,0,0,0,73.18732,80.98979Zm0,0a3.15019,3.15019,0,0,0-3.09825-4.172,7.41442,7.41442,0,0,0-7.31694,6.3705,3.15591,3.15591,0,0,0,3.181,3.64787A7.37207,7.37207,0,0,0,73.18732,80.98979ZM67.9967,122.57412l55.9381-64.51554a5.7309,5.7309,0,0,0,1.18625-5.03993L123.4552,13.31659a11.961,11.961,0,0,0-8.90848-8.84484L74.51786,2.99265a5.73912,5.73912,0,0,0-4.99961,1.19686L5.3019,59.87932a7.25134,7.25134,0,0,0-.46049,10.6762l52.47911,52.47911A7.25132,7.25132,0,0,0,67.9967,122.57412ZM108.29505,19.581a10.28769,10.28769,0,1,1-14.549,0A10.28855,10.28855,0,0,1,108.29505,19.581ZM49.78712,45.79506A12.77414,12.77414,0,0,1,61.293,35.66849a8.34808,8.34808,0,0,1,9.161,9.28411c-.713,6.83308-7.38487,12.01522-13.99937,10.87567A8.31845,8.31845,0,0,1,49.78712,45.79506Zm-4.78317,25.2358c-1.95446.44776-2.31307.225-2.7778-1.71676-.71939-3.11735-.72787-3.13433,2.32791-3.83883q19.39481-4.44683,38.79594-8.883c1.64885-.37985,2.07325-.09551,2.46158,1.50665.20585.77458.38622,1.5364.55176,2.26217-.1167,1.08438-.85732,1.38784-1.70616,1.57457-4.64735,1.0653-9.31169,2.13484-13.95693,3.198Q57.85,68.07165,45.00395,71.03086ZM64.42522,91.8103a8.08953,8.08953,0,0,1-6.74183-8.90215c.46474-7.07713,7.79016-12.61152,14.50868-10.99874a8.08059,8.08059,0,0,1,6.24316,8.24217C78.19756,87.29026,71.34536,93.00506,64.42522,91.8103Zm5.66385-14.99252a7.41442,7.41442,0,0,0-7.31694,6.3705,3.15591,3.15591,0,0,0,3.181,3.64787,7.37207,7.37207,0,0,0,7.23416-5.84636A3.15019,3.15019,0,0,0,70.08907,76.81778ZM61.92118,40.84636a7.26552,7.26552,0,0,0-7.08988,6.55512,3.02038,3.02038,0,0,0,3.08553,3.43778,7.45886,7.45886,0,0,0,7.35938-6.014C65.59875,42.35942,64.39977,40.91852,61.92118,40.84636ZM73.18732,80.98979a3.15019,3.15019,0,0,0-3.09825-4.172,7.41442,7.41442,0,0,0-7.31694,6.3705,3.15591,3.15591,0,0,0,3.181,3.64787A7.37207,7.37207,0,0,0,73.18732,80.98979Zm0,0a3.15019,3.15019,0,0,0-3.09825-4.172,7.41442,7.41442,0,0,0-7.31694,6.3705,3.15591,3.15591,0,0,0,3.181,3.64787A7.37207,7.37207,0,0,0,73.18732,80.98979Z"/></svg>
        <svg id="taxIdentification" data-name="taxIdentification" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"/></svg>
      </iron-iconset-svg>
    `;
  }
}

window.customElements.define('nc-icons', NcIcons);
