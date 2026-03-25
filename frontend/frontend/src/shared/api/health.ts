import { http } from '@/shared/api/http'

export type HealthResponse = {
  status: string
}

export async function getHealth() {
  const { data } = await http.get<HealthResponse>('/api/health')
  return data
}
