import { Usuario } from './usuario';
import { Role } from './role';

export class UserRole {
    id: string;
    user: Usuario;
    role : Role
}