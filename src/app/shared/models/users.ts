export interface Users {

    gender: string;
    name: {
        title: string,
        first: string,
        last: string
    };
    email: string;
    dob: {
        date: Date,
        age: number
    };
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    };

}
