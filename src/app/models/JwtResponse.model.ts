
export interface JwtResponse{
   token: string;
   type: string;
   username: string;
   authorities: role[];
}

// tslint:disable-next-line:class-name
export interface role{
   authority: string;
}
