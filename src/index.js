import Split from './components/split';

const VueSplit = {
  Split,
  SplitArea: Split.SplitArea
}

const install = function (Vue, opts = {}) {
  Object.keys(VueSplit).forEach((key) => {
    Vue.component(key, VueSplit[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(VueSplit, { install }); // eslint-disable-line no-undef
