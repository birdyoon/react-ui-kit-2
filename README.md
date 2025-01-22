### `UI Package(@repo/react-ui-kit-2)`

## **Tabs**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Tabs

### Children

- Index
- TabMenu
- TabMenuList
- TabPannel

### Example

```tsx
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

- Index
- BreadcrumbItem

### Example

```tsx
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

- Index
- CarouselItemList
- CarouselItem
- CarouselNavigator
- CarouselIndicator

### Example

```tsx
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

- Index
- CalendarCurrent
- CalendarNavigator
- CalendarBody

### Example

```tsx
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

- Index
- PaginationPageButtons
- PaginationNavigator

### Example

```tsx
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

- Index
- PopoverTrigger
- PopoverContent

### Example

```tsx
<Popover popoverPosition="bottom-left">
  <Popover.Trigger>open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover>
```

## **Progress**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Progress

### Children

- Index

### Example

```tsx
<Progress stop={stop} />
```

## **Modal**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Modal

### Children

- Index
- ModalBackdrop
- ModalTrigger
- ModalContent
- ModalClose

### Example

```tsx
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

- Index

### Example

```tsx
<DatePicker date={new Date()} onChangeDate={handleChangeDatePicker} />
```

## **Select**

### Source

https://github.com/birdyoon/react-ui-kit-2/tree/master/src/components/Select

### Children

- Index
- SelectTrigger
- SelectContent
- SelectItem

### Example

```tsx
<Select onChange={handleChangeValue} value={selectedValue}>
  <Select.Trigger />
  <Select.Content>
    <Select.Item value={"1"}>One</Select.Item>
    <Select.Item value={"2"}>Two</Select.Item>
    <Select.Item value={"3"}>Three</Select.Item>
  </Select.Content>
</Select>
```
