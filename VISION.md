# VIBECODE MASTER DOCUMENT: ECOCHARGE LANDING PAGE

## 1. RRI REPORT (REQUIREMENTS)

### DECISIONS LOG
- **D01 [Layout]:** Trải nghiệm Single-page Storytelling (Cuộn chuột từ trên xuống, không chuyển trang).
- **D02 [Ngôn ngữ & Hiển thị]:** 100% Tiếng Anh. Tối ưu Desktop-first (16:9 cho máy chiếu/laptop).
- **D03 [Animation]:** Trực quan hóa công nghệ bằng hiệu ứng Scroll-reveal (Bóc tách 3 lớp vật liệu khi cuộn chuột).
- **D04 [Nội dung]:** Bổ sung phần giới thiệu Team (ĐHQGHN) vào cuối trang.
- **D05 [Design]:** Áp dụng nghiêm ngặt Design System phong cách Starbucks (Warm cream, House Green, không gradient).
- **D06 [Tech Stack]:** Sử dụng React (Next.js) + Tailwind CSS + Framer Motion.

### REQUIREMENTS MATRIX (REQ-IDs)
- **REQ-001 (Hero):** Có Tiêu đề "EcoCharge: Powering the Smart City with Every Step", nút CTA chính "Download Pitch Deck" (màu `#00754A`).
- **REQ-002 (Problem):** Thể hiện rõ ràng bài toán lãng phí năng lượng đô thị.
- **REQ-003 (Tech/Animation):** Hoạt ảnh cuộn mượt mà bóc tách 3 lớp: Polycarbonate, Piezoelectric discs, Nhôm.
- **REQ-004 (Impact):** Hiển thị số liệu nổi bật: 60,000 kWh/năm, giảm 60 tấn CO2 (ESG / Net Zero focus).
- **REQ-005 (Team):** Thông tin đội ngũ sáng lập.
- **REQ-006 (UI/UX Compliance):** Đảm bảo UI tuân thủ các quy tắc: Nút bấm bo tròn 50px (pill), font chữ không chân (tracking -0.01em), nền màu kem `#f2f0eb`.

---

## 2. VISION PROPOSAL

**NATURE:** Marketing Landing Page + Single-page Storytelling + Tech Showcase.

**ARCHITECTURE:**
Ứng dụng Single Page Application (SPA) dạng tĩnh. Không yêu cầu Backend/Database. Luồng người dùng đi theo trục dọc (Vertical Scroll), dẫn dắt từ Vấn đề -> Giải pháp công nghệ (Animation điểm nhấn) -> Tác động môi trường -> Đội ngũ. 

**DESIGN DIRECTION:**
- **Vibe:** "Xanh", Thân thiện, Cao cấp, Bền vững.
- **Style:** Color-block (màu khối đặc, không gradient), bo góc mềm mại, typography to và rõ ràng.

**TECH STACK:**
- **Framework:** Next.js (App Router) - Tối ưu SEO và tốc độ load.
- **Styling:** Tailwind CSS - Dựng UI cực nhanh theo Design System.
- **Animation:** Framer Motion - Bắt buộc để làm hiệu ứng bóc tách 3 lớp thảm sạc.
- **Deployment Target:** Vercel (để show cho hội đồng ngay lập tức).

---

## 3. BLUEPRINT & ARCHITECTURE

### 3.1. DESIGN SYSTEM TOKENS (Starbucks Inspired)
Thợ thi công (Builder) bắt buộc phải cấu hình các token này vào `tailwind.config.ts`:
- `bg-canvas`: Warm cream `#f2f0eb` (Nền chính của trang)
- `bg-surface`: Ceramic off-white `#edebe9` (Nền các thẻ card)
- `color-house-green`: House Green `#1E3932` (Dùng cho các dải màu lớn/Section nền tối)
- `color-brand-green`: Starbucks Green `#006241` (Dùng cho Text Heading/Điểm nhấn)
- `color-accent-green`: Green Accent `#00754A` (Chỉ dùng cho nút CTA chính)
- `shape-pill`: `border-radius: 50px` (Cho mọi button)
- `shape-card`: `border-radius: 12px` (Cho các thẻ thông tin)
- `typography`: Font Inter hoặc Manrope (thay thế SoDoSans), với `letter-spacing: -0.01em`.

### 3.2. FILE STRUCTURE 
```text
src/
├── app/
│   ├── page.tsx              # Lắp ráp các section
│   ├── layout.tsx            # Chứa thẻ HTML, cấu hình font
│   └── globals.css           # CSS base
├── components/
│   ├── ui/                   # Chứa Button, Card tái sử dụng
│   ├── sections/
│   │   ├── HeroSection.tsx   # REQ-001
│   │   ├── ProblemSection.tsx# REQ-002
│   │   ├── TechSection.tsx   # REQ-003 (Chứa Framer Motion)
│   │   ├── ImpactSection.tsx # REQ-004
│   │   └── TeamSection.tsx   # REQ-005
└── public/
    └── assets/               # Chứa ảnh/logo/mockup

## 3.3. TASK GRAPH PREVIEW (Dành cho Thợ)
TIP-001 (Scaffold): Khởi tạo Next.js, cài Tailwind & Framer Motion, config Design System.

TIP-002 (Core UI & Hero): Xây dựng các UI Components cơ bản (Pill button) và ghép Hero Section, Problem Section.

TIP-003 (The Heavy Lifter): Code TechSection.tsx với Framer Motion useScroll để làm hiệu ứng bóc tách 3 lớp vật liệu.

TIP-004 (Completion): Code Impact Section, Team Section, ráp nối hoàn chỉnh trang page.tsx và chạy QC.