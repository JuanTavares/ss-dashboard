import { Users } from './users';

export interface Random {
    results: Array<Users>;
    info: {
        seed: string,
        results: number,
        page: number,
        version: number
      };
}
