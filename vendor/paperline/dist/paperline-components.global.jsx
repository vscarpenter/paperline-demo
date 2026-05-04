// AUTO-GENERATED from src/ by scripts/build.mjs — do not edit by hand.
// Components bundle for browser-global usage with Babel Standalone.

// Paperline — Component Library
// All components use the --pl-* tokens from paperline.css
// Components are intentionally headless-ish: small, composable, no deps beyond React.

const { useState, useEffect, useRef, useId, useCallback } = React;
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

/* ============================================================
   Buttons
   ============================================================ */
const PLButton = ({
  kind = "primary",
  size = "md",
  icon: IconComp,
  iconRight,
  children,
  disabled,
  fullWidth,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
  ...rest
}) => {
  const sizes = {
    sm: { p: "5px 10px", fs: 12,  ic: 13, gap: 5, h: 28 },
    md: { p: "8px 14px", fs: 12.5, ic: 14, gap: 6, h: 34 },
    lg: { p: "10px 18px", fs: 13.5, ic: 15, gap: 7, h: 40 },
  };
  const kinds = {
    primary:   { bg: "var(--pl-accent-500)", color: "var(--pl-accent-ink)", border: "var(--pl-accent-600)", shadow: "var(--pl-shadow-sm)" },
    secondary: { bg: "var(--pl-paper-card)", color: "var(--pl-ink-2)",     border: "var(--pl-hairline-strong)", shadow: "var(--pl-shadow-xs)" },
    ghost:     { bg: "transparent",          color: "var(--pl-ink-2)",     border: "transparent", shadow: "none" },
    danger:    { bg: "var(--pl-paper-card)", color: "var(--pl-danger-500)",border: "var(--pl-hairline-strong)", shadow: "var(--pl-shadow-xs)" },
    accentSoft:{ bg: "var(--pl-accent-50)",  color: "var(--pl-accent-700)",border: "var(--pl-accent-100)", shadow: "none" },
  };
  const s = sizes[size]; const k = kinds[kind];
  const iconOnly = !children && (IconComp || iconRight);
  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel || (iconOnly ? "button" : undefined)}
      className={`pl-btn pl-btn--${kind} ${className}`.trim()}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: s.gap,
        padding: s.p, height: s.h, width: fullWidth ? "100%" : "auto",
        background: k.bg, color: k.color,
        border: `1px solid ${k.border}`, borderRadius: 8,
        fontSize: s.fs, fontWeight: 600, fontFamily: "var(--pl-font-sans)",
        letterSpacing: 0, cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: k.shadow, opacity: disabled ? 0.5 : 1,
        transition: "background var(--pl-dur-1) var(--pl-ease), box-shadow var(--pl-dur-1)",
      }}
      {...rest}
    >
      {IconComp && <IconComp size={s.ic} />}
      {children}
      {iconRight && React.createElement(iconRight, { size: s.ic })}
    </button>
  );
};

/* ============================================================
   Inputs
   ============================================================ */
const PLInput = ({ icon: IconComp, suffix, placeholder, value, onChange, type = "text", error, id, disabled, ...rest }) => (
  <label className="pl-field" style={{
    display: "flex", alignItems: "center", gap: 8,
    padding: "9px 12px",
    background: disabled ? "var(--pl-field-disabled-bg)" : "var(--pl-field-bg)",
    border: `1px solid ${error ? "var(--pl-danger-500)" : "var(--pl-field-border)"}`,
    borderRadius: 8, boxShadow: "var(--pl-shadow-xs)",
    transition: "border-color var(--pl-dur-1), box-shadow var(--pl-dur-1)",
    opacity: disabled ? 0.6 : 1,
  }}>
    {IconComp && <IconComp size={15} style={{ color: "var(--pl-ink-4)", flexShrink: 0 }} />}
    <input
      id={id}
      type={type} value={value} onChange={onChange} placeholder={placeholder}
      disabled={disabled}
      aria-invalid={error ? true : undefined}
      style={{
        flex: 1, border: "none", outline: "none", background: "transparent",
        fontSize: 13, color: "var(--pl-field-text)", fontFamily: "var(--pl-font-sans)",
        minWidth: 0,
      }}
      {...rest}
    />
    {suffix}
  </label>
);

const PLTextarea = ({ placeholder, value, onChange, rows = 3, error, id, disabled, ...rest }) => (
  <textarea
    id={id} rows={rows} value={value} onChange={onChange} placeholder={placeholder}
    disabled={disabled}
    aria-invalid={error ? true : undefined}
    className="pl-field"
    style={{
      width: "100%", padding: "10px 12px",
      background: disabled ? "var(--pl-field-disabled-bg)" : "var(--pl-field-bg)",
      border: `1px solid ${error ? "var(--pl-danger-500)" : "var(--pl-field-border)"}`,
      borderRadius: 8, boxShadow: "var(--pl-shadow-xs)",
      fontSize: 13, color: "var(--pl-field-text)", fontFamily: "var(--pl-font-sans)",
      lineHeight: 1.55, resize: "vertical", outline: "none",
      opacity: disabled ? 0.6 : 1,
    }}
    {...rest}
  />
);

const PLSelect = ({ value, onChange, options = [], placeholder, id, disabled, error, ...rest }) => (
  <div className="pl-field" style={{
    display: "flex", alignItems: "center", gap: 6,
    padding: "0 10px 0 12px",
    background: disabled ? "var(--pl-field-disabled-bg)" : "var(--pl-field-bg)",
    border: `1px solid ${error ? "var(--pl-danger-500)" : "var(--pl-field-border)"}`,
    borderRadius: 8, boxShadow: "var(--pl-shadow-xs)", height: 34,
    transition: "border-color var(--pl-dur-1)",
    opacity: disabled ? 0.6 : 1,
  }}>
    <select
      id={id} value={value} onChange={onChange} disabled={disabled}
      aria-invalid={error ? true : undefined}
      style={{
        flex: 1, border: "none", outline: "none", background: "transparent",
        fontSize: 13, color: "var(--pl-field-text)", fontFamily: "var(--pl-font-sans)",
        appearance: "none", paddingRight: 4, cursor: disabled ? "not-allowed" : "pointer",
      }}
      {...rest}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        typeof o === "string"
          ? <option key={o} value={o}>{o}</option>
          : <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>
      ))}
    </select>
    <I.ChevDown size={14} style={{ color: "var(--pl-ink-4)" }} />
  </div>
);

/* ============================================================
   Toggle / Checkbox / Radio  (real <input>, visually hidden)
   ============================================================ */
const PLToggle = ({ checked, onChange, label, disabled, id, name }) => {
  const auto = useId();
  const inputId = id || auto;
  return (
    <label htmlFor={inputId} className="pl-toggle" style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontSize: 13, color: "var(--pl-ink-2)", opacity: disabled ? 0.6 : 1,
    }}>
      <input
        id={inputId} name={name} type="checkbox" role="switch"
        className="pl-sr-only"
        checked={!!checked} onChange={onChange} disabled={disabled}
      />
      <span aria-hidden="true" className="pl-toggle-track" style={{
        position: "relative", width: 32, height: 18,
        background: checked ? "var(--pl-accent-500)" : "var(--pl-paper-2)",
        border: `1px solid ${checked ? "var(--pl-accent-600)" : "var(--pl-hairline-strong)"}`,
        borderRadius: 999, transition: "background var(--pl-dur-2), border-color var(--pl-dur-2)",
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute", top: 1, left: checked ? 14 : 1,
          width: 14, height: 14, borderRadius: 999,
          background: "var(--pl-paper-card)",
          boxShadow: "var(--pl-shadow-sm)",
          transition: "left var(--pl-dur-2) var(--pl-ease)",
        }} />
      </span>
      {label}
    </label>
  );
};

const PLCheckbox = ({ checked, onChange, label, indeterminate, disabled, id, name, value }) => {
  const auto = useId();
  const inputId = id || auto;
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  return (
    <label htmlFor={inputId} className="pl-checkbox" style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontSize: 13, color: "var(--pl-ink-2)", opacity: disabled ? 0.6 : 1,
    }}>
      <input
        ref={ref} id={inputId} name={name} value={value} type="checkbox"
        className="pl-sr-only"
        checked={!!checked} onChange={onChange} disabled={disabled}
      />
      <span aria-hidden="true" className="pl-checkbox-box" style={{
        width: 16, height: 16,
        background: (checked || indeterminate) ? "var(--pl-accent-500)" : "var(--pl-paper-card)",
        border: `1px solid ${(checked || indeterminate) ? "var(--pl-accent-600)" : "var(--pl-hairline-strong)"}`,
        borderRadius: 4,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        transition: "all var(--pl-dur-1)",
      }}>
        {checked && !indeterminate && <I.Check size={11} strokeWidth={2.4} style={{ color: "var(--pl-accent-ink)" }} />}
        {indeterminate && <span style={{ width: 8, height: 1.6, background: "var(--pl-accent-ink)" }} />}
      </span>
      {label}
    </label>
  );
};

const PLRadio = ({ checked, onChange, label, disabled, id, name, value }) => {
  const auto = useId();
  const inputId = id || auto;
  return (
    <label htmlFor={inputId} className="pl-radio" style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontSize: 13, color: "var(--pl-ink-2)", opacity: disabled ? 0.6 : 1,
    }}>
      <input
        id={inputId} name={name} value={value} type="radio"
        className="pl-sr-only"
        checked={!!checked} onChange={onChange} disabled={disabled}
      />
      <span aria-hidden="true" className="pl-radio-dot" style={{
        width: 16, height: 16, borderRadius: 999,
        background: "var(--pl-paper-card)",
        border: `1px solid ${checked ? "var(--pl-accent-500)" : "var(--pl-hairline-strong)"}`,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {checked && <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--pl-accent-500)" }} />}
      </span>
      {label}
    </label>
  );
};

/* ============================================================
   Field wrapper — label + helper + error
   ============================================================ */
const PLField = ({ label, helper, error, required, children, id }) => {
  const auto = useId();
  const inputId = id || auto;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  const child = React.Children.only(children);
  const cloned = React.cloneElement(child, {
    id: inputId,
    "aria-describedby": [helper && helperId, error && errorId].filter(Boolean).join(" ") || undefined,
    "aria-required": required || undefined,
    error: error ? true : child.props.error,
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontSize: 12, fontWeight: 600, color: "var(--pl-ink-2)",
          fontFamily: "var(--pl-font-sans)",
        }}>
          {label}{required && <span aria-hidden="true" style={{ color: "var(--pl-danger-500)", marginLeft: 3 }}>*</span>}
        </label>
      )}
      {cloned}
      {helper && !error && <div id={helperId} style={{ fontSize: 11.5, color: "var(--pl-ink-3)" }}>{helper}</div>}
      {error && <div id={errorId} style={{ fontSize: 11.5, color: "var(--pl-danger-500)" }}>{error}</div>}
    </div>
  );
};

/* ============================================================
   Badge / Chip / Tag
   ============================================================ */
const PLBadge = ({ tone = "neutral", children, dot }) => {
  const tones = {
    neutral: { bg: "var(--pl-paper-1)", fg: "var(--pl-ink-3)",      d: "var(--pl-ink-4)" },
    accent:  { bg: "var(--pl-accent-50)", fg: "var(--pl-accent-700)", d: "var(--pl-accent-500)" },
    ok:      { bg: "var(--pl-ok-50)",     fg: "var(--pl-ok-700)",     d: "var(--pl-ok-500)" },
    warn:    { bg: "var(--pl-warn-50)",   fg: "var(--pl-warn-700)",   d: "var(--pl-warn-500)" },
    danger:  { bg: "var(--pl-danger-50)", fg: "var(--pl-danger-700)", d: "var(--pl-danger-500)" },
    info:    { bg: "var(--pl-info-50)",   fg: "var(--pl-info-500)",   d: "var(--pl-info-500)" },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 8px 3px 7px",
      background: t.bg, color: t.fg,
      borderRadius: 999,
      fontSize: 11, fontWeight: 500,
      lineHeight: 1.4,
      border: "1px solid var(--pl-hairline)",
    }}>
      {dot && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 999, background: t.d }} />}
      {children}
    </span>
  );
};

const PLTag = ({ children, onRemove }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 4,
    padding: "2px 7px",
    background: "var(--pl-paper-1)", color: "var(--pl-ink-3)",
    border: "1px solid var(--pl-hairline)",
    borderRadius: 4,
    fontSize: 11, fontWeight: 500, fontFamily: "var(--pl-font-mono)",
  }}>
    {children}
    {onRemove && (
      <button
        type="button"
        onClick={onRemove}
        aria-label="Remove tag"
        className="pl-iconbtn"
        style={{
          background: "none", border: "none", padding: 0, marginLeft: 2,
          cursor: "pointer", color: "var(--pl-ink-4)", display: "inline-flex",
        }}
      >
        <I.X size={11} />
      </button>
    )}
  </span>
);

/* ============================================================
   Card / Surface / Divider
   ============================================================ */
const PLCard = ({ children, padding = 20, lifted, ...rest }) => (
  <div style={{
    background: "var(--pl-paper-card)",
    border: "1px solid var(--pl-hairline)",
    borderRadius: 12,
    padding,
    boxShadow: lifted ? "var(--pl-shadow-md)" : "var(--pl-shadow-sm)",
    transition: "box-shadow var(--pl-dur-2), transform var(--pl-dur-2)",
    ...rest.style,
  }} {...rest}>{children}</div>
);

const PLDivider = ({ orientation = "horizontal", label }) => {
  if (orientation === "vertical") {
    return (
      <span aria-hidden="true" style={{
        display: "inline-block", width: 1, alignSelf: "stretch",
        background: "var(--pl-hairline-strong)", margin: "0 4px",
      }} />
    );
  }
  if (label) {
    return (
      <div role="separator" aria-orientation="horizontal" style={{
        display: "flex", alignItems: "center", gap: 10, color: "var(--pl-ink-4)",
      }}>
        <span style={{ flex: 1, height: 1, background: "var(--pl-hairline-strong)" }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.08, textTransform: "uppercase" }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: "var(--pl-hairline-strong)" }} />
      </div>
    );
  }
  return <hr role="separator" style={{ border: "none", height: 1, background: "var(--pl-hairline-strong)", margin: 0 }} />;
};

/* ============================================================
   Avatar / AvatarGroup
   ============================================================ */
const initials = (name) => (name || "").trim().split(/\s+/).slice(0, 2).map((s) => s[0]?.toUpperCase() || "").join("");

const PLAvatar = ({ name, size = 32, src, color = "var(--pl-cat-plum)", alt }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: size, height: size, borderRadius: 999,
    background: src ? "transparent" : `color-mix(in oklab, ${color}, var(--pl-paper-1) 70%)`,
    color: color,
    border: "1px solid var(--pl-hairline)",
    fontSize: size * 0.4, fontWeight: 600,
    fontFamily: "var(--pl-font-sans)",
    overflow: "hidden", flexShrink: 0,
  }}>
    {src
      ? <img src={src} alt={alt ?? name ?? ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      : <span aria-hidden={!alt && !name}>{initials(name)}</span>}
  </span>
);

const PLAvatarGroup = ({ people, max = 3 }) => {
  const shown = people.slice(0, max);
  const extra = people.length - max;
  return (
    <div style={{ display: "inline-flex" }}>
      {shown.map((p, i) => (
        <div key={i} style={{ marginLeft: i ? -8 : 0, border: "2px solid var(--pl-paper-card)", borderRadius: 999 }}>
          <PLAvatar name={p.name} color={p.color} src={p.src} size={28} />
        </div>
      ))}
      {extra > 0 && (
        <span style={{
          marginLeft: -8, width: 28, height: 28, borderRadius: 999,
          background: "var(--pl-paper-2)", border: "2px solid var(--pl-paper-card)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: 10.5, fontWeight: 600, color: "var(--pl-ink-3)",
        }}>+{extra}</span>
      )}
    </div>
  );
};

/* ============================================================
   Progress / Spinner / Skeleton
   ============================================================ */
const PLProgress = ({ value = 0, label, accent = "var(--pl-accent-500)" }) => {
  const v = clamp(Number(value) || 0, 0, 100);
  return (
    <div>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--pl-ink-3)", marginBottom: 6 }}>
          <span style={{ fontWeight: 500 }}>{label}</span>
          <span className="pl-mono" style={{ fontWeight: 600, color: "var(--pl-ink-2)" }}>{v}%</span>
        </div>
      )}
      <div role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} aria-label={label}
        style={{ height: 4, background: "var(--pl-paper-2)", borderRadius: 999, overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${v}%`,
          background: `linear-gradient(90deg, var(--pl-accent-400), ${accent})`,
          borderRadius: 999, transition: "width var(--pl-dur-3) var(--pl-ease)",
        }} />
      </div>
    </div>
  );
};

const PLSpinner = ({ size = 16, label = "Loading" }) => (
  <span role="status" aria-label={label} style={{ display: "inline-flex", color: "var(--pl-accent-500)" }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      style={{ animation: "pl-spin 0.8s linear infinite" }} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2.4" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
    <span className="pl-sr-only">{label}</span>
  </span>
);

const PLSkeleton = ({ width = "100%", height = 12, radius = 4, style }) => (
  <span aria-hidden="true" style={{
    display: "block", width, height, borderRadius: radius,
    background: "linear-gradient(90deg, var(--pl-paper-1) 0%, var(--pl-paper-2) 50%, var(--pl-paper-1) 100%)",
    backgroundSize: "200% 100%",
    animation: "pl-skeleton 1.4s ease-in-out infinite",
    ...style,
  }} />
);

/* ============================================================
   Alert / Empty state
   ============================================================ */
const PLAlert = ({ tone = "info", title, children, icon: IconComp }) => {
  const tones = {
    info:   { bg: "var(--pl-info-50)",   bd: "var(--pl-info-200)",   fg: "var(--pl-info-500)" },
    ok:     { bg: "var(--pl-ok-50)",     bd: "var(--pl-ok-200)",     fg: "var(--pl-ok-700)" },
    warn:   { bg: "var(--pl-warn-50)",   bd: "var(--pl-warn-200)",   fg: "var(--pl-warn-700)" },
    danger: { bg: "var(--pl-danger-50)", bd: "var(--pl-danger-200)", fg: "var(--pl-danger-700)" },
  };
  const t = tones[tone];
  const Default = { info: I.Info, ok: I.Check, warn: I.Alert, danger: I.Alert }[tone];
  const Use = IconComp || Default;
  const role = tone === "danger" || tone === "warn" ? "alert" : "status";
  return (
    <div role={role} style={{
      display: "flex", gap: 12,
      padding: "12px 14px",
      background: t.bg, color: t.fg,
      border: `1px solid ${t.bd}`,
      borderLeft: `3px solid ${t.fg}`,
      borderRadius: 8,
    }}>
      <Use size={16} style={{ marginTop: 2, flexShrink: 0 }} />
      <div style={{ flex: 1, color: "var(--pl-ink-2)" }}>
        {title && <div style={{ fontSize: 13, fontWeight: 600, color: t.fg }}>{title}</div>}
        <div style={{ fontSize: 12.5, lineHeight: 1.55, marginTop: title ? 2 : 0 }}>{children}</div>
      </div>
    </div>
  );
};

const PLEmptyState = ({ icon: IconComp = I.Inbox, title, description, action }) => (
  <div style={{
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    textAlign: "center", padding: "32px 24px", gap: 8,
    background: "var(--pl-paper-card)", border: "1px dashed var(--pl-hairline-strong)",
    borderRadius: 12,
  }}>
    <span style={{
      width: 44, height: 44, borderRadius: 999,
      background: "var(--pl-paper-1)", color: "var(--pl-ink-3)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
    }}>
      <IconComp size={22} />
    </span>
    {title && <div className="pl-serif" style={{ fontSize: 18, color: "var(--pl-ink-1)" }}>{title}</div>}
    {description && <div style={{ fontSize: 12.5, color: "var(--pl-ink-3)", maxWidth: 360 }}>{description}</div>}
    {action && <div style={{ marginTop: 6 }}>{action}</div>}
  </div>
);

/* ============================================================
   Tabs (real ARIA tabs + arrow-key nav)
   ============================================================ */
const PLTabs = ({ items, value, onChange, label = "Tabs" }) => {
  const onKey = (e, idx) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    let next = idx;
    if (e.key === "ArrowRight") next = (idx + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    onChange(items[next].value);
    e.currentTarget.parentElement.querySelectorAll("[role='tab']")[next]?.focus();
  };
  return (
    <div role="tablist" aria-label={label} style={{
      display: "inline-flex", gap: 2, padding: 3,
      background: "var(--pl-paper-1)",
      border: "1px solid var(--pl-hairline)",
      borderRadius: 8,
    }}>
      {items.map((it, i) => {
        const active = value === it.value;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(it.value)}
            onKeyDown={(e) => onKey(e, i)}
            className="pl-tab"
            style={{
              padding: "5px 12px", border: "none",
              background: active ? "var(--pl-paper-card)" : "transparent",
              color: active ? "var(--pl-ink-1)" : "var(--pl-ink-3)",
              boxShadow: active ? "var(--pl-shadow-xs)" : "none",
              borderRadius: 6, cursor: "pointer",
              fontSize: 12, fontWeight: 600, fontFamily: "var(--pl-font-sans)",
              transition: "all var(--pl-dur-1)",
            }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
};

/* ============================================================
   Stat tile
   ============================================================ */
const PLStat = ({ label, value, delta, tone = "neutral" }) => {
  const tones = {
    neutral: "var(--pl-ink-2)",
    ok: "var(--pl-ok-500)", warn: "var(--pl-warn-500)",
    danger: "var(--pl-danger-500)", info: "var(--pl-info-500)",
    accent: "var(--pl-accent-500)",
  };
  return (
    <div style={{
      padding: "14px 16px",
      background: "var(--pl-paper-card)",
      border: "1px solid var(--pl-hairline-strong)",
      borderRadius: 10, boxShadow: "var(--pl-shadow-xs)",
    }}>
      <div className="pl-eyebrow" style={{ fontSize: 10 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
        <span className="pl-serif" style={{ fontSize: 28, color: tones[tone] || tones.neutral, letterSpacing: -0.02 }}>{value}</span>
        {delta && (
          <span className="pl-mono" style={{ fontSize: 11, color: delta.startsWith("+") ? "var(--pl-ok-500)" : "var(--pl-danger-500)", fontWeight: 600 }}>
            {delta}
          </span>
        )}
      </div>
    </div>
  );
};

/* ============================================================
   Table
   ============================================================ */
const PLTable = ({ columns, rows, caption }) => (
  <div style={{
    background: "var(--pl-paper-card)",
    border: "1px solid var(--pl-hairline-strong)",
    borderRadius: 10, overflow: "hidden",
    boxShadow: "var(--pl-shadow-xs)",
  }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      {caption && <caption className="pl-sr-only">{caption}</caption>}
      <thead>
        <tr style={{ background: "var(--pl-paper-1)", borderBottom: "1px solid var(--pl-hairline-strong)" }}>
          {columns.map(c => (
            <th key={c.key} scope="col" style={{
              textAlign: "left", padding: "10px 14px",
              fontSize: 10.5, letterSpacing: 0.14, textTransform: "uppercase",
              color: "var(--pl-ink-4)", fontWeight: 600,
            }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--pl-hairline)" : "none" }}>
            {columns.map(c => (
              <td key={c.key} style={{ padding: "12px 14px", color: "var(--pl-ink-2)" }}>
                {c.render ? c.render(r) : r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ============================================================
   Toast / Snackbar (with auto-dismiss)
   ============================================================ */
const PLToast = ({ tone = "neutral", icon: IconComp, title, action, duration = 0, onDismiss }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!duration) return;
    const t = setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, duration);
    return () => clearTimeout(t);
  }, [duration, onDismiss]);
  if (!visible) return null;
  const tones = {
    neutral: { fg: "var(--pl-ink-2)", d: "var(--pl-ink-4)" },
    ok: { fg: "var(--pl-ok-700)", d: "var(--pl-ok-500)" },
    danger: { fg: "var(--pl-danger-700)", d: "var(--pl-danger-500)" },
  };
  const t = tones[tone];
  const role = tone === "danger" ? "alert" : "status";
  return (
    <div role={role} aria-live={tone === "danger" ? "assertive" : "polite"} style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "10px 14px",
      background: "var(--pl-paper-card)",
      border: "1px solid var(--pl-hairline-strong)",
      borderRadius: 10, boxShadow: "var(--pl-shadow-lg)",
    }}>
      {IconComp && <IconComp size={15} style={{ color: t.d }} />}
      <span style={{ fontSize: 13, fontWeight: 500, color: t.fg }}>{title}</span>
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="pl-btn"
          style={{
            marginLeft: 8, padding: "2px 8px",
            background: "none", border: "none",
            fontSize: 11.5, fontWeight: 600, color: "var(--pl-accent-500)",
            cursor: "pointer", borderLeft: "1px solid var(--pl-hairline)",
          }}
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

/* ============================================================
   Layout primitives
   ============================================================ */
const PLStack = ({ gap = 12, align = "stretch", as: Tag = "div", children, style, ...rest }) => (
  <Tag style={{ display: "flex", flexDirection: "column", gap, alignItems: align, ...style }} {...rest}>
    {children}
  </Tag>
);

const PLCluster = ({ gap = 8, align = "center", justify = "flex-start", wrap = true, as: Tag = "div", children, style, ...rest }) => (
  <Tag style={{
    display: "flex", flexDirection: "row", flexWrap: wrap ? "wrap" : "nowrap",
    gap, alignItems: align, justifyContent: justify, ...style,
  }} {...rest}>{children}</Tag>
);

const PLGrid = ({ cols = 3, gap = 16, minCol, as: Tag = "div", children, style, ...rest }) => (
  <Tag style={{
    display: "grid",
    gridTemplateColumns: minCol
      ? `repeat(auto-fill, minmax(${typeof minCol === "number" ? `${minCol}px` : minCol}, 1fr))`
      : `repeat(${cols}, minmax(0, 1fr))`,
    gap, ...style,
  }} {...rest}>{children}</Tag>
);

/* ============================================================
   Breadcrumbs
   ============================================================ */
const PLBreadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb">
    <ol style={{
      display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6,
      listStyle: "none", padding: 0, margin: 0,
      fontSize: 12, color: "var(--pl-ink-3)", fontFamily: "var(--pl-font-sans)",
    }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <li key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {it.href && !last
              ? <a href={it.href} className="pl-link" style={{ color: "var(--pl-ink-2)", textDecoration: "none", fontWeight: 500 }}>{it.label}</a>
              : <span aria-current={last ? "page" : undefined} style={{ color: last ? "var(--pl-ink-1)" : "var(--pl-ink-3)", fontWeight: last ? 600 : 500 }}>{it.label}</span>}
            {!last && <I.ChevRight size={12} style={{ color: "var(--pl-ink-4)" }} />}
          </li>
        );
      })}
    </ol>
  </nav>
);

/* ============================================================
   Pagination
   ============================================================ */
const PLPagination = ({ page = 1, total, onChange }) => {
  const go = (p) => onChange(clamp(p, 1, total));
  const buttons = [];
  const pushBtn = (p, key = p) => buttons.push(
    <button
      key={key}
      type="button"
      onClick={() => go(p)}
      aria-current={page === p ? "page" : undefined}
      className="pl-page-btn"
      style={{
        minWidth: 28, height: 28, padding: "0 8px",
        background: page === p ? "var(--pl-accent-500)" : "var(--pl-paper-card)",
        color: page === p ? "var(--pl-accent-ink)" : "var(--pl-ink-2)",
        border: `1px solid ${page === p ? "var(--pl-accent-600)" : "var(--pl-hairline-strong)"}`,
        borderRadius: 6, cursor: "pointer",
        fontSize: 12, fontWeight: 600, fontFamily: "var(--pl-font-sans)",
      }}
    >{p}</button>
  );
  const window = 1;
  const pages = new Set([1, total, page - window, page, page + window].filter((p) => p >= 1 && p <= total));
  const sorted = [...pages].sort((a, b) => a - b);
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) buttons.push(<span key={`g${p}`} style={{ color: "var(--pl-ink-4)", padding: "0 4px" }}>…</span>);
    pushBtn(p);
    prev = p;
  }
  return (
    <nav aria-label="Pagination" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <button type="button" onClick={() => go(page - 1)} disabled={page <= 1}
        aria-label="Previous page"
        className="pl-page-btn"
        style={{
          width: 28, height: 28, display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: "var(--pl-paper-card)", color: "var(--pl-ink-2)",
          border: "1px solid var(--pl-hairline-strong)", borderRadius: 6,
          cursor: page <= 1 ? "not-allowed" : "pointer", opacity: page <= 1 ? 0.5 : 1,
        }}><I.ChevLeft size={14} /></button>
      {buttons}
      <button type="button" onClick={() => go(page + 1)} disabled={page >= total}
        aria-label="Next page"
        className="pl-page-btn"
        style={{
          width: 28, height: 28, display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: "var(--pl-paper-card)", color: "var(--pl-ink-2)",
          border: "1px solid var(--pl-hairline-strong)", borderRadius: 6,
          cursor: page >= total ? "not-allowed" : "pointer", opacity: page >= total ? 0.5 : 1,
        }}><I.ChevRight size={14} /></button>
    </nav>
  );
};

/* ============================================================
   Tooltip (CSS-only on hover/focus, no portal)
   ============================================================ */
const PLTooltip = ({ label, side = "top", children }) => {
  const id = useId();
  const offsets = {
    top:    { bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 6px)",    left: "50%", transform: "translateX(-50%)" },
    left:   { right: "calc(100% + 6px)",  top: "50%",  transform: "translateY(-50%)" },
    right:  { left: "calc(100% + 6px)",   top: "50%",  transform: "translateY(-50%)" },
  };
  const child = React.Children.only(children);
  const cloned = React.cloneElement(child, { "aria-describedby": id });
  return (
    <span style={{ position: "relative", display: "inline-flex" }} className="pl-tooltip-host">
      {cloned}
      <span
        role="tooltip"
        id={id}
        style={{
          position: "absolute", ...offsets[side],
          padding: "4px 8px",
          background: "var(--pl-ink-1)", color: "var(--pl-paper-card)",
          fontSize: 11, fontWeight: 500, fontFamily: "var(--pl-font-sans)",
          borderRadius: 4, whiteSpace: "nowrap",
          opacity: 0, pointerEvents: "none",
          transition: "opacity var(--pl-dur-1)",
          zIndex: "var(--pl-z-tooltip)",
        }}
      >{label}</span>
      <style>{`.pl-tooltip-host:hover [role="tooltip"], .pl-tooltip-host:focus-within [role="tooltip"] { opacity: 1 !important; }`}</style>
    </span>
  );
};

/* ============================================================
   Dropdown / Menu (controlled, click-outside, Esc to close)
   ============================================================ */
const PLMenu = ({ trigger, items, align = "left", onSelect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const triggerWrapRef = useRef(null);
  const focusTrigger = () => triggerWrapRef.current?.querySelector("button, [href], [tabindex]")?.focus();
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target) && !triggerWrapRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); focusTrigger(); } };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);
  const triggerEl = React.cloneElement(trigger, {
    onClick: (e) => { trigger.props.onClick?.(e); setOpen((o) => !o); },
    "aria-haspopup": "menu",
    "aria-expanded": open,
  });
  return (
    <span style={{ position: "relative", display: "inline-flex" }}>
      <span ref={triggerWrapRef} style={{ display: "inline-flex" }}>{triggerEl}</span>
      {open && (
        <div ref={ref} role="menu" style={{
          position: "absolute", top: "calc(100% + 6px)",
          [align === "right" ? "right" : "left"]: 0,
          minWidth: 160, padding: 4,
          background: "var(--pl-paper-card)",
          border: "1px solid var(--pl-hairline-strong)",
          borderRadius: 8, boxShadow: "var(--pl-shadow-lg)",
          zIndex: "var(--pl-z-dropdown)",
        }}>
          {items.map((it, i) => (
            it.divider
              ? <div key={`d${i}`} role="separator" style={{ height: 1, background: "var(--pl-hairline)", margin: "4px 0" }} />
              : (
                <button
                  key={it.value || i}
                  type="button"
                  role="menuitem"
                  disabled={it.disabled}
                  onClick={() => { onSelect?.(it.value, it); it.onClick?.(); setOpen(false); focusTrigger(); }}
                  className="pl-menu-item"
                  style={{
                    display: "flex", alignItems: "center", gap: 8, width: "100%",
                    padding: "6px 10px", border: "none",
                    background: "transparent", color: it.danger ? "var(--pl-danger-500)" : "var(--pl-ink-2)",
                    fontSize: 12.5, fontWeight: 500, fontFamily: "var(--pl-font-sans)",
                    borderRadius: 6, cursor: it.disabled ? "not-allowed" : "pointer",
                    textAlign: "left", opacity: it.disabled ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => { if (!it.disabled) e.currentTarget.style.background = "var(--pl-paper-1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  {it.icon && React.createElement(it.icon, { size: 14 })}
                  <span style={{ flex: 1 }}>{it.label}</span>
                  {it.shortcut && <span className="pl-mono" style={{ fontSize: 10.5, color: "var(--pl-ink-4)" }}>{it.shortcut}</span>}
                </button>
              )
          ))}
        </div>
      )}
    </span>
  );
};

/* ============================================================
   Modal / Dialog (Esc + overlay click + basic focus trap)
   ============================================================ */
const PLModal = ({ open, onClose, title, description, children, footer, size = "md", closeOnOverlay = true }) => {
  const ref = useRef(null);
  const labelId = useId();
  const descId = useId();
  const lastFocused = useRef(null);
  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") { onClose?.(); return; }
      if (e.key !== "Tab" || !ref.current) return;
      const focusables = ref.current.querySelectorAll(
        'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => ref.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  const widths = { sm: 360, md: 480, lg: 640, xl: 820 };
  return (
    <div
      onMouseDown={(e) => { if (closeOnOverlay && e.target === e.currentTarget) onClose?.(); }}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(28,26,23,0.42)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20, zIndex: "var(--pl-z-modal)",
      }}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? labelId : undefined}
        aria-describedby={description ? descId : undefined}
        style={{
          width: "100%", maxWidth: widths[size] || widths.md, maxHeight: "calc(100vh - 40px)",
          background: "var(--pl-paper-card)",
          border: "1px solid var(--pl-hairline-strong)",
          borderRadius: 12, boxShadow: "var(--pl-shadow-xl)",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}
      >
        {(title || onClose) && (
          <div style={{
            display: "flex", alignItems: "flex-start", gap: 12,
            padding: "16px 20px",
            borderBottom: "1px solid var(--pl-hairline)",
          }}>
            <div style={{ flex: 1 }}>
              {title && <div id={labelId} className="pl-serif" style={{ fontSize: 20, color: "var(--pl-ink-1)" }}>{title}</div>}
              {description && <div id={descId} style={{ fontSize: 12.5, color: "var(--pl-ink-3)", marginTop: 2 }}>{description}</div>}
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="pl-iconbtn"
                style={{
                  background: "transparent", border: "none",
                  padding: 6, borderRadius: 6,
                  cursor: "pointer", color: "var(--pl-ink-3)",
                  display: "inline-flex",
                }}
              ><I.X size={16} /></button>
            )}
          </div>
        )}
        <div style={{ padding: 20, overflow: "auto", color: "var(--pl-ink-2)", fontSize: 13.5, lineHeight: 1.55 }}>
          {children}
        </div>
        {footer && (
          <div style={{
            display: "flex", justifyContent: "flex-end", gap: 8,
            padding: "12px 20px",
            borderTop: "1px solid var(--pl-hairline)",
            background: "var(--pl-paper-1)",
          }}>{footer}</div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, {
    PLButton, PLInput, PLTextarea, PLSelect, PLToggle, PLCheckbox, PLRadio,
    PLField, PLBadge, PLTag, PLCard, PLDivider, PLAvatar, PLAvatarGroup,
    PLProgress, PLSpinner, PLSkeleton, PLAlert, PLEmptyState, PLTabs, PLStat,
    PLTable, PLToast, PLStack, PLCluster, PLGrid, PLBreadcrumbs, PLPagination,
    PLTooltip, PLMenu, PLModal,
  });
