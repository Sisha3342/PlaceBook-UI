export class Office {
  id: number;
  address: {
    address: string;
    city: string;
    country: string;
  };
  worktimeStart?: string;
  worktimeEnd?: string;
}
