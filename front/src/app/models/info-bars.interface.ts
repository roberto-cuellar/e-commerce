export interface InfoBar{
  btnsPosition?: 'left' | 'center' | 'right';
  infoText?: string;
  items: InfoBarItem[];
}

export interface InfoBarItem {
  iconOnly: boolean;
  icon?: string;
  label?: string;
}
