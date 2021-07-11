// domain.com/news
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page!</h1>
      <ul>
        <li>
          <Link href="/news/something">Something</Link>
        </li>
        <li>
          <Link href="/news/something-else">Something Else</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
