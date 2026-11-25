import { Terminal } from 'lucide-react';
import { PagePlaceholder } from '../components/ui/PagePlaceholder';

export function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="02 / Contact"
      title="Contact"
      subtitle="HCM-UTE DSC 2026 · Connect with the team"
      description="Contact details and channels for team fastlearning at HCM-UTE Developer Student Club 2026 will be available here soon."
      icon={<Terminal size={26} aria-hidden="true" />}
    />
  );
}
