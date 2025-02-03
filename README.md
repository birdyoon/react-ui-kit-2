### `UI Package(@repo/react-ui-kit-2)`

## **Tabs**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Tabs

### Children

- Root
- TabMenu
- TabMenuList
- TabPannel

### Example

```jsx
<Tabs onChangeTab={handleChangeTab}>
  <Tabs.MenuList>
    <Tabs.Menu index={1}>Menu1</Tabs.Menu>
    <Tabs.Menu index={2}>Menu2</Tabs.Menu>
    <Tabs.Menu index={3}>Menu3</Tabs.Menu>
  </Tabs.MenuList>
  <Tabs.Pannel index={1}>Content1</Tabs.Pannel>
  <Tabs.Pannel index={2}>Content2</Tabs.Pannel>
  <Tabs.Pannel index={3}>Content3</Tabs.Pannel>
</Tabs>
```

## **Breadcrumb**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Breadcrumb

### Children

- Root
- BreadcrumbItem

### Example

```jsx
<Breadcrumb width="200px">
  <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a">A-A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a">A-A-A-A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a-a">A-A-A-A-A</Breadcrumb.Item>
</Breadcrumb>
```

## **Carousel**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Carousel

### Children

- Root
- CarouselItemList
- CarouselItem
- CarouselNavigator
- CarouselIndicator

### Example

```jsx
<Carousel itemLength={3}>
  <Carousel.ItemList>
    <Carousel.Item index={0}>1</Carousel.Item>
    <Carousel.Item index={1}>2</Carousel.Item>
    <Carousel.Item index={2}>3</Carousel.Item>
  </Carousel.ItemList>
  <Carousel.Navigator />
  <Carousel.Indicator />
</Carousel>
```

## **Calendar**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Calendar

### Children

- Root
- CalendarCurrent
- CalendarNavigator
- CalendarBody

### Example

```jsx
<Calendar onChange={handleChangeDate} value={date}>
  <Calendar.Current />
  <Calendar.Navigator />
  <Calendar.Body />
</Calendar>
```

## **Pagination**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Pagination

### Children

- Root
- PaginationPageButtons
- PaginationNavigator

### Example

```jsx
<Pagination
  itemLength={235}
  onPageChange={handleChangePage}
  value={page}
  visiblePageCount={10}
  itemsPerPage={20}
>
  <Pagination.PageButtons />
  <Pagination.Navigator />
</Pagination>
```

## **Popover**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Popover

### Children

- Root
- PopoverTrigger
- PopoverContent

### Example

```jsx
<Popover popoverPosition="bottom-left">
  <Popover.Trigger>open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover>
```

## **Progress**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Progress

### Children

- Root

### Example

```jsx
<Progress stop={stop} />
```

## **Modal**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Modal

### Children

- Root
- ModalBackdrop
- ModalTrigger
- ModalContent
- ModalClose

### Example

```jsx
<Modal
  onCloseModel={handleCloseModal}
  onOpenModal={handleOpenModal}
  open={isOpen}
>
  <Modal.Backdrop />
  <Modal.Trigger>
    <div>Custom-Trigger</div>
  </Modal.Trigger>
  <Modal.Content>
    <Modal.Close>
      <a>custom-modal-close</a>
    </Modal.Close>
    <div>Modal Content</div>
  </Modal.Content>
</Modal>
```

## **DatePicker**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/DatePicker

### Children

- Root

### Example

```jsx
<DatePicker date={new Date()} onChangeDate={handleChangeDatePicker} />
```

## **Select**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Select

### Children

- Root
- SelectTrigger
- SelectContent
- SelectItem

### Example

```jsx
<Select onChange={handleChangeValue} value={selectedValue}>
  <Select.Trigger />
  <Select.Content>
    <Select.Item value={"1"}>One</Select.Item>
    <Select.Item value={"2"}>Two</Select.Item>
    <Select.Item value={"3"}>Three</Select.Item>
  </Select.Content>
</Select>
```

## **Accordion**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Accordion

### Children

- Root
- AccordionItem
- AccordionTrigger
- AccordionContent

### Example

```jsx
<Accordion>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It comes with default styles that matches the other components&apos;
      aesthetic.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Trigger>Is it animated?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It's animated by default, but you can disable it if you prefer.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## **Toast**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Toast

### Children

- Root
- ToastContent
- ToastTitle
- ToastDescription
- ToastClose

### Example

```jsx
const Page = () => {
  const toast = useToast();
  const handleClickOpenToast = () => {
    toast({
      title: "ToastTitle",
      description: "ToastDescription",
      delay: 2000,
      position: "top-right",
    });
  };
  return <button onClick={handleClickOpenToast}>open toast</button>;
};

const App = () => {
  return (
    <>
      <Page />
      <Toaster />
    </>
  );
};
```
