import { useQuery } from '@tanstack/react-query'
import { getHealth } from '@/shared/api/health'

export function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['health'],
    queryFn: getHealth,
  })

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold">Asset Tracker</h1>

      <div className="mt-4 rounded-xl border p-4">
        <p className="text-sm">백엔드 연결 테스트</p>
        {isLoading && <p className="mt-2 text-sm">로딩 중...</p>}
        {isError && <p className="mt-2 text-sm text-red-500">에러 발생</p>}
        {data && <p className="mt-2 text-sm text-green-600">status: {data.status}</p>}
      </div>
    </main>
  )
}
