const prefixCls = "sy";

const getBaseCls = (suffix: string) => {
  return `${prefixCls}-${suffix}`;
};

/** Tabs Component **/
export const tabsBaseCls = getBaseCls("tabs");
export const tabsMenuListBaseCls = getBaseCls("tabs-menu-list");
export const tabsMenuBaseCls = getBaseCls("tabs-menu");
export const tabsPannelBaseCls = getBaseCls("tabs-pannel");

/** Carousel Component **/
export const carouselBaseCls = getBaseCls("carousel");
export const carouselItemListCls = getBaseCls("carousel-item-List");
export const carouselItemCls = getBaseCls("carousel-item");
export const carouselNavigatorCls = getBaseCls("carousel-navigation");
export const carouselIndicatorCls = getBaseCls("carousel-indicator");

// calendar Component
export const calendarBaseCls = getBaseCls("calendar");
export const calendarCurrentCls = getBaseCls("calendar-current");
export const calendarNavigatorCls = getBaseCls("calendar-navigator");
export const calendarBodyCls = getBaseCls("calendar-body");

// breadcrumb Component
export const breadcrumbBaseCls = getBaseCls("breadcrumb");
export const breadcrumbItemBaseCls = getBaseCls("breadcrumb-item");
export const breadcrumbSperatorBaseCls = getBaseCls("breadcrumb-sperator");

// pagination Component
export const paginationBaseCls = getBaseCls("pagination");
export const paginationNavigatorCls = getBaseCls("pagination-navigator");
export const paginationPageButtons = getBaseCls("pagination-button");

// Popover Component
export const popoverBaseCls = getBaseCls("popover");
export const popoverContentCls = getBaseCls("popover-content");
export const popoverTriggerCls = getBaseCls("popover-trigger");

// Progress Component
export const progressBaseCls = getBaseCls("progress");

// Modal Component
export const modalBaseCls = getBaseCls("modal");
export const modalBackdropCls = getBaseCls("modal-backdrop");
export const modalTriggerCls = getBaseCls("modal-trigger");
export const modalCloseCls = getBaseCls("modal-close");
export const modalContentCls = getBaseCls("modal-content");

// datePicker Component
export const datePickerBaseCls = getBaseCls("datepicker");

// Select Component
export const selectBaseCls = getBaseCls("select");
export const selectTriggerCls = getBaseCls("select-trigger");
export const selectContentCls = getBaseCls("select-content");
export const selectItemCls = getBaseCls("select-item");

// Accordion Component
export const accordionBaseCls = getBaseCls("accordion");
export const accordionItemCls = getBaseCls("accordion-item");
export const accordionTriggerCls = getBaseCls("accordion-trigger");
export const accordionContentCls = getBaseCls("accordion-content");

// Toast Component
export const toastBaseCls = getBaseCls("toast");
export const toastContentCls = getBaseCls("toast-content");
export const toastDescriptionCls = getBaseCls("toast-description");
export const toastTitleCls = getBaseCls("toast-title");
export const toastCloseCls = getBaseCls("toast-close");
