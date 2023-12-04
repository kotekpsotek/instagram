interface Post {
    profile_img: string,
    /** Name location assigned to post */
    location?: string,
    user_name: string,
    post_img: string,
    /** Names who likes this post */
    liked_by: string[],
    description: string,
    comments: unknown[],
    /** Publication date */
    pub_date: Date
}

type Posts = Post[];
