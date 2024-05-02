declare type userInterface = {
    id : string;
    name: string;
    email: string;
    username: string;
    address: object;
};

type userPreview = Omit <userInterface,  "address">;