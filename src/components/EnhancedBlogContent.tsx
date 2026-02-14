
import React from 'react';
import { ContentSection } from '@/data/blogPosts';
import { DollarSign, Users, TrendingUp, Shield, Zap, Settings, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface EnhancedBlogContentProps {
  content: ContentSection[];
}

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Settings,
  Database
};

const EnhancedBlogContent: React.FC<EnhancedBlogContentProps> = ({ content }) => {
  const renderContent = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-3xl font-bold mb-6 text-white border-b-2 border-white/30 pb-2">
            {section.content}
          </h2>
        );
      
      case 'subheading':
        return (
          <h3 key={index} className="text-2xl font-semibold mb-4 text-white">
            {section.content}
          </h3>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="text-gray-200 mb-6 leading-relaxed text-lg">
            {section.content}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-6 space-y-2">
            {section.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-200 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        );
      
      case 'icon-list':
        return (
          <div key={index} className="grid gap-4 mb-8">
            {section.items?.map((item, itemIndex) => {
              const icons = [Shield, Zap, Settings, Database];
              const IconComponent = icons[itemIndex % icons.length];
              return (
                <Card key={itemIndex} className="border border-white/20 bg-white/5">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="bg-wrlds-blue p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-200 leading-relaxed flex-1">{item}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        );

      case 'bibliography':
        return (
          <div key={index} className="mb-8">
            <ol className="list-none space-y-3">
              {section.items?.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-300 leading-relaxed text-sm bg-white/5 p-3 rounded border-l-4 border-wrlds-blue">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        );
      
      case 'stats':
        return (
          <div key={index} className="grid md:grid-cols-3 gap-6 mb-8">
            {section.statsData?.map((stat, statIndex) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || TrendingUp;
              return (
                <Card key={statIndex} className="border border-white/20 bg-white/5 text-center">
                  <CardContent className="p-6">
                    <div className="bg-wrlds-blue p-3 rounded-full inline-block mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        );
      
      case 'chart':
        if (!section.chartData) return null;
        
        const colors = ['#0066CC', '#3388DD', '#66AAEE', '#99CCFF'];
        
        return (
          <Card key={index} className="border border-white/20 bg-white/5 mb-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-4 text-white text-center">
                {section.chartData.title}
              </h4>
              <div className="h-64 w-full">
                {section.chartData.title.includes('Market Growth') ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={section.chartData.data}>
                      <XAxis dataKey="name" stroke="#fff" />
                      <YAxis stroke="#fff" />
                      <Bar dataKey="value" fill="#0066CC" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={section.chartData.data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={(entry) => `${entry.name}: ${entry.value}%`}
                      >
                        {section.chartData.data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
        );
      
      case 'table':
        if (!section.tableData) return null;
        return (
          <Card key={index} className="border border-white/20 bg-white/5 mb-8 overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-wrlds-blue text-white">
                  <tr>
                    {section.tableData.headers.map((header, headerIndex) => (
                      <th key={headerIndex} className="p-4 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableData.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-4 border-b border-white/10 text-gray-200">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        );
      
      case 'quote':
        return (
          <Card key={index} className="border border-wrlds-blue bg-wrlds-blue/20 text-white mb-8">
            <CardContent className="p-8 text-center">
              <blockquote className="text-xl italic font-medium">
                "{section.content}"
              </blockquote>
            </CardContent>
          </Card>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="prose prose-lg prose-invert max-w-none">
      {content.map((section, index) => renderContent(section, index))}
    </div>
  );
};

export default EnhancedBlogContent;
