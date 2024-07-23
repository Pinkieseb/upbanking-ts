export interface ListCategoriesParams {
  'filter[parent]'?: string;
}

export interface ListCategoriesResponse {
  data: CategoryResource[];
}

export interface GetCategoryResponse {
  data: CategoryResource;
}

export interface CategoryResource {
  type: 'categories';
  id: string;
  attributes: {
    name: string;
  };
  relationships: {
    parent: {
      data: {
        type: 'categories';
        id: string;
      } | null;
      links: {
        related: string;
      };
    };
    children: {
      data: {
        type: 'categories';
        id: string;
      }[];
      links: {
        related: string;
      };
    };
  };
  links: {
    self: string;
  };
}
