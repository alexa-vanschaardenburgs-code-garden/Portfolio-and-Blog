import '../PageHeader/PageHeader.scss';

function PageHeader({ page }) {
  return (
    <div className="page-header">
      <h1>{page}</h1>
      <img id="flower-3" src={`${process.env.PUBLIC_URL}/flower_3.png`} />
    </div>
  );
}

export default PageHeader;