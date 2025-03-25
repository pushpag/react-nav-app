

export interface ISidebarProps {
  isHovered: boolean; // Prop passed from the parent
  onToggleChange: (value: boolean) => void; // Function passed from the parent (event handler)
}