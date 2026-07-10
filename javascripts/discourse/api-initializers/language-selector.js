import { apiInitializer } from "discourse/lib/api";
import LanguageSwitcher from "discourse/components/language-switcher";
import Helper from "@ember/component/helper";
import { service } from "@ember/service";

class WatchSidebarHider extends Helper {
  @service sidebarState;

  compute() {
    if (this.sidebarState?.sidebarHidden) {
      document.body.classList.add("show-header-language-selector");
    } else {
      document.body.classList.remove("show-header-language-selector");
    }
    return "";
  }
}

export default apiInitializer("1.8.0", (api) => {
  api.renderInOutlet("sidebar-footer-actions", LanguageSwitcher);

  api.renderInOutlet("above-site-header", <template>
    {{ (WatchSidebarHider) }}
  </template>);
});
