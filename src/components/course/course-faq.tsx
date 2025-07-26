import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface CourseFAQProps {
  sections: Section[];
}

export function CourseFAQ({ sections }: CourseFAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  if (!sections || sections.length === 0) {
    return null;
  }

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'Frequently Asked Questions'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section) => (
          <div key={section.type}>
            {section.description && (
              <div
                className="prose prose-gray max-w-none mb-4"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            )}

            {/* Render FAQ items */}
            {section.values && section.values.length > 0 && (
              <div className="space-y-3">
                {section.values.map((faq: any, index: number) => {
                  const itemId = faq.id || `faq-${index}`;
                  const isOpen = openItems.has(itemId);

                  return (
                    <div
                      key={itemId}
                      className="border border-gray-200 rounded-lg"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-3 border-t border-gray-200">
                          <div
                            className="prose prose-sm max-w-none text-gray-700 pt-3"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
