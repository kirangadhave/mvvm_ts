export class ViewBase {
  Context: any;
  Root: HTMLElement;

  constructor(root: HTMLElement) {
    this.Root = root;
  }

  create() {}

  update(event?: any, param?: any) {}
}
