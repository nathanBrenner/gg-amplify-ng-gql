export interface Giver {
  id: string;
  name: string;
  spouse: string;
  assignedTo?: Giver;
}

export interface GiverGroup {
  name: string;
  id: string;
  givers: Giver[];
}
