export interface TV4PanelItem {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
}

export interface TV4Panel {
  title: string;
  items: TV4PanelItem[];
}

export interface TV4ShowcaseData {
  panels: TV4Panel[];
}
