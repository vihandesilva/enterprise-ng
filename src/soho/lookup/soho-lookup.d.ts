/**
 * Soho Lookup.
 *
 * This file contains the Typescript mappings for the public
 * interface of the Soho jQuery lookup control.
 */

interface SohoLookupOptions {
  /** Custom click event; can be used with a modal dialog and custom list component */
  click?: Function;

  /** Field to return from the array or can be a function. */
  field?: string | SohoLookupFieldFunction;

  /** Dialog title or takes the label + Lookup. */
  title?: string;

  /** Pass dialog buttons or Cancel / Apply. */
  buttons?: any;  // @todo

  /** Options to pass to the underlying data grid. */
  options?: SohoDataGridOptions;

  /** Function used to match the search term to the data. */
  match?: SohoDataGridMatchFunction;

  /**
   * Used to manage data prior to showing the lookup.
   *
   * For example:
   *  - When the button is clicked, show a loading dialog and make the request for
   *    lookup grid data.
   *  - Upon receiving grid data, set lookup.settings.options for the columns and dataset.
   *  - Then call grid() to build the grid and complete the lookup call.
   */
  beforeShow?: SohoLookupBeforeShowFunction;

  /** Custom modal content. */
  modalContent?: JQuery | string;

  /** Can the user type random text into the field. */
  editable?: boolean;

  /** Not supported - future. */
  typeahead?: boolean;

  /** ?? */
  autoApply?: boolean;

  /** A function that fires to let you validate form items on open and select. */
  validator?: SohoLookupValidatorFunction;
}

/** Selection criteria. */
type SohoDataGridMatchFunction = (
  /** Value to match against. */
  value: any,

  /** The row to match. */
  data: Object,

  /** The editor element. */
  element: JQuery,

  /** The grid api. */
  grid: SohoDataGridStatic
) => boolean;

type SohoLookupFieldFunction = (
  /** This row? or Cell? */
  data: Object,

  /**  */
  input: JQuery,

  /** Reference to underlying  */
  grid: SohoDataGridStatic
) => string;

/**
 * This interface represents the public API exposed by the
 * Lookup.
 */
interface SohoLookupStatic {
  /** Access to the control's options block. */
  settings: SohoLookupOptions;

  /** Acess to the datagrid used for this function. */
  grid: SohoDataGridStatic;

  /** Underlying element. */
  element: JQuery;

  /** Destructor. */
  destroy(): void;
}

type SohoLookupBeforeShowFunction = (
  lookup: any,
  grid: (gridOptions: Object) => {}
) => any;

/** todo */
type SohoLookupValidatorFunction = Function;

interface SohoLookupChangeEvent {
  data: Object;
  elem: HTMLElement[];
  idx: number;
}

/**
 * JQuery Integration
 */
interface JQueryStatic {
  lookup: SohoLookupStatic;
}

interface JQuery {
  lookup(options?: SohoLookupOptions): JQuery;
}
