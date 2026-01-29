interface SectionTitleProps {
  englishTitle: string;
  japaneseTitle: string;
}

export default function SectionTitle({ englishTitle, japaneseTitle }: SectionTitleProps) {
  return (
    <div className="section-title">
      <p className="section-title-en">{englishTitle}</p>
      <h2 className="section-title-ja">{japaneseTitle}</h2>
      <div className="section-title-line"></div>
    </div>
  );
}
