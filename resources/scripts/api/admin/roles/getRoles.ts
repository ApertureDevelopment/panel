import http from '@/api/http';

export interface Role {
    id: number,
    name: string,
    description: string|null,
}

export default (): Promise<Role[]> => {
    return new Promise((resolve, reject) => {
        http.get('/admin/roles')
            .then(({ data }) => resolve(data || []))
            .catch(reject);
    });
};
