import { Code2 } from 'lucide-react';
import { PagePlaceholder } from '../components/ui/PagePlaceholder';

export function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="01 / About Us"
      title="About Us"
      subtitle="fastlearning · Our story and Study Jam journey"
      description="A detailed look at team fastlearning's learning journey, engineering culture, and members is currently being prepared."
      icon={<Code2 size={26} aria-hidden="true" />}
    />
  );
}
