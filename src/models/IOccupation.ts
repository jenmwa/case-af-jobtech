export interface IOccupation {
  id: string;
  occupation_label: string;
  occupation_group: {
    occupation_group_label: string;
    ssyk: string;
  };
}
