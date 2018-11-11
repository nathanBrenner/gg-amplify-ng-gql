export interface Giver {
  id: string;
  name: string;
  exclude?: string;
  assignedTo?: Giver;
}

export interface GiverGroup {
  name: string;
  id: string;
  givers: Giver[];
}
