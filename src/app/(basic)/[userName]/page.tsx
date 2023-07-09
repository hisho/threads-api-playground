import Link from 'next/link'
import { ThreadsAPI } from 'threads-api'

type Props = { params: { userName: string } }

export default async function ({ params }: Props) {
  const threadsAPI = new ThreadsAPI()
  const userID = await threadsAPI.getUserIDfromUsername(params.userName)
  if (!userID) {
    return <div>not found</div>
  }

  const posts = await threadsAPI.getUserProfileThreads(params.userName, userID)

  return (
    <div>
      <h1>{params.userName}の投稿</h1>
      {posts.map((thread, index) => (
        <div key={`${thread.id}__${index}`}>
          {thread.thread_items.map((threadItem, index) => (
            <div key={`${threadItem.post.id}_${index}`}>
              <Link
                className={'hover:underline focus:underline'}
                href={`/${params.userName}/${threadItem.post.code}`}
              >
                {threadItem.post.caption?.text}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
