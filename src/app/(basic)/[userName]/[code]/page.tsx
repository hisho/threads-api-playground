import { ThreadsAPI } from 'threads-api'

type Props = { params: { code: string; userName: string } }

export default async function ({ params }: Props) {
  const threadsAPI = new ThreadsAPI()
  const postId = await threadsAPI.getPostIDfromThreadID(params.code)

  if (!postId) {
    return <div>not found</div>
  }
  const thread = await threadsAPI.getThreads(postId)

  return (
    <div>
      {thread.containing_thread.thread_items.map((threadItem, index) => (
        <div key={`containing_thread_${threadItem.post.id}_${index}`}>
          <p>message: {threadItem.post.caption?.text}</p>
          <p>like: {threadItem.post.like_count}</p>
        </div>
      ))}
      <section>
        <h1>reply</h1>
        <ul className={'flex flex-col gap-y-2'}>
          {thread.reply_threads?.map((replyThreads) =>
            replyThreads.thread_items.map((threadItem, index) => (
              <li key={`reply_threads_${threadItem.post.id}_${index}`}>
                <div>
                  <p>user name: {threadItem.post.user.username}</p>
                  <p>message: {threadItem.post.caption?.text}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  )
}
