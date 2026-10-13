const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  }
});

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector("#service");
    const requestedService = link.dataset.service;
    const matchingOption = [...serviceSelect.options].find((option) => option.value === requestedService || option.text === requestedService);

    if (matchingOption) {
      serviceSelect.value = matchingOption.value || matchingOption.text;
    }
  });
});

const dateInput = document.querySelector("#date");
const localToday = new Date();
const localDate = new Date(localToday.getTime() - localToday.getTimezoneOffset() * 60_000);
dateInput.min = localDate.toISOString().slice(0, 10);

document.querySelector("#year").textContent = String(new Date().getFullYear());
