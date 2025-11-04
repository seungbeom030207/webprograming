import { Button } from "@/components/ui/button";
import { Sparkles, Shirt, Heart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: User,
      title: "프로필 설정",
      description: "체형에 맞는 코디 추천",
      action: () => navigate("/profile"),
    },
    {
      icon: Shirt,
      title: "내 옷장",
      description: "옷을 등록하고 관리하세요",
      action: () => navigate("/closet"),
    },
    {
      icon: Sparkles,
      title: "코디 추천",
      description: "AI가 제안하는 오늘의 룩",
      action: () => navigate("/recommendations"),
    },
    {
      icon: Heart,
      title: "내 룩북",
      description: "저장한 코디 모아보기",
      action: () => navigate("/lookbook"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold tracking-tight">오늘 뭐 입지?</h1>
            <div className="flex gap-6">
              <button className="text-sm hover:text-primary transition-colors">로그인</button>
              <button className="text-sm hover:text-primary transition-colors">회원가입</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            AI 기반 스타일링 서비스
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            오늘 뭐 입지?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            매일 아침 고민되는 코디, AI가 해결해드립니다.<br />
            당신의 옷장에서 최고의 조합을 찾아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/profile")} className="h-12 px-8">
              시작하기
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/closet")} className="h-12 px-8 border-2">
              내 옷장 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={feature.action}
              className="bg-background p-8 hover:bg-primary/5 transition-all text-left group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all" />
              <feature.icon className="h-6 w-6 mb-4 text-primary group-hover:scale-110 transition-transform relative z-10" />
              <h3 className="text-lg font-semibold mb-2 relative z-10">{feature.title}</h3>
              <p className="text-sm text-muted-foreground relative z-10">{feature.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">어떻게 작동하나요?</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-bold text-muted mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">프로필 등록</h3>
              <p className="text-muted-foreground">
                키, 체형 등 기본 정보를 입력하세요
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-muted mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">옷 등록</h3>
              <p className="text-muted-foreground">
                내 옷장의 옷들을 사진과 함께 등록하세요
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-muted mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">코디 추천</h3>
              <p className="text-muted-foreground">
                AI가 매일 새로운 코디를 제안해드려요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 오늘 뭐 입지? All rights reserved.</p>
            <div className="flex gap-6">
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">이용약관</button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">개인정보처리방침</button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">문의하기</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
