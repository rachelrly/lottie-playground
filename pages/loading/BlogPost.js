export default function BlogPost({
  children,
  title = "",
  link = { title: "", href: "" },
  date = "",
}) {
  const linkToPost = link.title.toUpperCase();
  return (
    <section>
      <div className="blog-post-wrapper ">
        <h3>{title}</h3>
        <span className="date-posted">{date}</span>
        <a href={link.href} className="link-tag">
          <span className="link-text">{linkToPost}</span>
        </a>
      </div>
    </section>
  );
}
