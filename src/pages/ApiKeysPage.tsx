import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, RotateCcw, Code, Globe, Check } from "lucide-react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import { useToast } from "@/hooks/use-toast";

const ApiKeysPage = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const apiKey = "oux_live_sk_1234567890abcdef1234567890abcdef";
  const testApiKey = "oux_test_sk_abcdef1234567890abcdef1234567890";

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  const integrationExamples = {
    html: `<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <!-- OfflineUX Integration -->
    <script src="https://cdn.offlineux.com/init.js" data-site="${apiKey}"></script>
</head>
<body>
    <!-- Your website content -->
</body>
</html>`,
    nextjs: `// pages/_app.js or app/layout.js
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script 
        src="https://cdn.offlineux.com/init.js" 
        data-site="${apiKey}"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}`,
    react: `// App.js
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.offlineux.com/init.js';
    script.setAttribute('data-site', '${apiKey}');
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      {/* Your app content */}
    </div>
  );
}`,
    wordpress: `<?php
// Add to your theme's functions.php file
function add_offlineux_script() {
    ?>
    <script src="https://cdn.offlineux.com/init.js" data-site="<?php echo '${apiKey}'; ?>"></script>
    <?php
}
add_action('wp_head', 'add_offlineux_script');`
  };

  return (
    <AuthenticatedLayout>
      <div className="p-6 lg:p-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">API Keys</h1>
          <p className="text-muted-foreground mt-1">Manage your API keys and integration settings</p>
        </div>

        {/* API Keys Section */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle>Your API Keys</CardTitle>
            <CardDescription>
              Use these keys to integrate OfflineUX with your websites. Keep them secure and never share them publicly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Production Key */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Production Key</h3>
                  <p className="text-sm text-muted-foreground">Use this key for your live websites</p>
                </div>
                <Button variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Regenerate
                </Button>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-secondary rounded-lg">
                <code className="flex-1 text-sm font-mono text-foreground bg-background px-3 py-2 rounded border">
                  {apiKey}
                </code>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(apiKey, "Production key")}
                >
                  {copied === "Production key" ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Test Key */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Test Key</h3>
                  <p className="text-sm text-muted-foreground">Use this key for development and testing</p>
                </div>
                <Button variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Regenerate
                </Button>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-secondary rounded-lg">
                <code className="flex-1 text-sm font-mono text-foreground bg-background px-3 py-2 rounded border">
                  {testApiKey}
                </code>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(testApiKey, "Test key")}
                >
                  {copied === "Test key" ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Instructions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Integration Instructions</CardTitle>
            <CardDescription>
              Follow these instructions to integrate OfflineUX with your website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                <TabsTrigger value="react">React</TabsTrigger>
                <TabsTrigger value="wordpress">WordPress</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">How it Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Add the Script</h4>
                        <p className="text-sm text-muted-foreground">
                          Include our lightweight JavaScript snippet in your website's HTML head section.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Automatic Detection</h4>
                        <p className="text-sm text-muted-foreground">
                          OfflineUX automatically detects when your visitors lose internet connection.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Fallback Activation</h4>
                        <p className="text-sm text-muted-foreground">
                          Your configured fallback experience (games, forms, chatbots) is automatically displayed.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Data Sync</h4>
                        <p className="text-sm text-muted-foreground">
                          Any leads or interactions are stored locally and synced when connection is restored.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Compatibility</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 border border-border rounded-lg">
                      <Globe className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-foreground">Any Framework</p>
                      <p className="text-xs text-muted-foreground">Works everywhere</p>
                    </div>
                    <div className="text-center p-3 border border-border rounded-lg">
                      <Code className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-foreground">No Dependencies</p>
                      <p className="text-xs text-muted-foreground">Pure JavaScript</p>
                    </div>
                    <div className="text-center p-3 border border-border rounded-lg">
                      <div className="text-2xl mx-auto mb-2">📱</div>
                      <p className="text-sm font-medium text-foreground">Mobile Ready</p>
                      <p className="text-xs text-muted-foreground">Responsive design</p>
                    </div>
                    <div className="text-center p-3 border border-border rounded-lg">
                      <div className="text-2xl mx-auto mb-2">⚡</div>
                      <p className="text-sm font-medium text-foreground">Lightweight</p>
                      <p className="text-xs text-muted-foreground">&lt; 10KB gzipped</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="html" className="space-y-4 mt-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">Plain HTML Integration</h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(integrationExamples.html, "HTML code")}
                    >
                      {copied === "HTML code" ? (
                        <Check className="h-4 w-4 mr-2 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      Copy Code
                    </Button>
                  </div>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{integrationExamples.html}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="nextjs" className="space-y-4 mt-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">Next.js Integration</h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(integrationExamples.nextjs, "Next.js code")}
                    >
                      {copied === "Next.js code" ? (
                        <Check className="h-4 w-4 mr-2 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      Copy Code
                    </Button>
                  </div>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{integrationExamples.nextjs}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="react" className="space-y-4 mt-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">React Integration</h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(integrationExamples.react, "React code")}
                    >
                      {copied === "React code" ? (
                        <Check className="h-4 w-4 mr-2 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      Copy Code
                    </Button>
                  </div>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{integrationExamples.react}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="wordpress" className="space-y-4 mt-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">WordPress Integration</h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(integrationExamples.wordpress, "WordPress code")}
                    >
                      {copied === "WordPress code" ? (
                        <Check className="h-4 w-4 mr-2 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      Copy Code
                    </Button>
                  </div>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{integrationExamples.wordpress}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
};

export default ApiKeysPage;