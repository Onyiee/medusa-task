import { apiFetch } from './api'

export function getUserRoles() {
  return apiFetch('/user-roles')
}

export function getActiveRoles() {
  return apiFetch('/active-roles')
}
