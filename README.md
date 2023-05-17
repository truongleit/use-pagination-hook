# usePagination Hook

The `usePagination` hook is a custom React hook that helps in generating a pagination range based on the provided options. It takes the following parameters:

```typescript
interface PaginationOptions {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}
```

- `totalCount`: The total number of items to be paginated.
- `pageSize`: The number of items per page.
- `siblingCount` (optional): The number of siblings to display on each side of the current page. Defaults to 1.
- `currentPage`: The current page number.

The `usePagination` hook returns a pagination range array, which consists of either page numbers or "DOTS" placeholders. The generated pagination range is suitable for rendering pagination links or buttons.

```typescript
import { usePagination } from "@src/hooks";

const MyComponent: React.FC = () => {
  const paginationRange = usePagination({
    totalCount: 100,
    pageSize: 10,
    siblingCount: 1,
    currentPage: 3,
  });

  return (
    <div>
      {paginationRange.map((pageNumber, index) => (
        <span key={index}>{pageNumber}</span>
      ))}
    </div>
  );
};
```

In the above example, `paginationRange` will contain an array representing the pagination links based on the provided options.

# Pagination Component

The `Pagination` component is a reusable React component that utilizes the `usePagination` hook to render a pagination UI. It provides a set of navigation controls and displays the pagination range.

## Props:

```typescript
interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

- `onPageChange`: A callback function that is invoked when a page is selected. It receives the selected page number as a parameter.
- `totalCount`: The total number of items to be paginated.
- `siblingCount` (optional): The number of siblings to display on each side of the current page. Defaults to 1.
- `currentPage`: The current page number.
- `pageSize`: The number of items per page.
- `className` (optional): Additional CSS classes to be applied to the component.
```

## Example usage:

```typescript
import Pagination from "@src/components/Pagination";

const MyComponent: React.FC = () => {
  const handlePageChange = (page: number) => {
    // Perform logic to update the current page
  };

  return (
    <div>
      <Pagination
        onPageChange={handlePageChange}
        totalCount={100}
        siblingCount={1}
        currentPage={3}
        pageSize={10}
        className="my-pagination"
      />
    </div>
  );
};
```

In the above example, the `Pagination` component will render pagination links based on the provided props. When a page is selected, the `handlePageChange` callback will be triggered, allowing you to update the current page state.

Note: The `Pagination` component relies on the `usePagination` hook to generate the pagination range. Make sure to import the `usePagination` hook and provide it as a dependency in your project.
