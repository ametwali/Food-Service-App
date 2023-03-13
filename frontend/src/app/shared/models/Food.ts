export class Food{
  //members
  //a required member is putting a "!" beside the name
  //an optional member is putting a "?" beside the name
  id!: string;
  name!: string;
  price!: number;
  tags?: string[];
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!:string;
}
