import { apiInitializer } from "discourse/lib/api";
import LanguageSwitcher from "discourse/components/language-switcher";

export default apiInitializer("1.8.0", (api) => {
  const currentUser = api.getCurrentUser();

  if (currentUser) {
    api.renderInOutlet("sidebar-footer-actions", LanguageSwitcher);
  }
});