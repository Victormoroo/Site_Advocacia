"use client";

import { FormEvent, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialForm = {
  nome: "",
  email: "",
  telefone: "",
  area: "",
  mensagem: "",
  consentimento: false,
};

type FormState = typeof initialForm;
type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const canSubmit = useMemo(() => {
    return (
      form.nome.trim().length > 2 &&
      form.email.trim().length > 4 &&
      form.telefone.trim().length > 7 &&
      form.mensagem.trim().length > 14 &&
      form.consentimento
    );
  }, [form]);

  function validate(data: FormState) {
    const nextErrors: FormErrors = {};

    if (data.nome.trim().length < 3) {
      nextErrors.nome = "Informe seu nome completo.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = "Informe um e-mail válido para retorno.";
    }

    if (data.telefone.replace(/\D/g, "").length < 10) {
      nextErrors.telefone = "Informe um telefone com DDD.";
    }

    if (data.mensagem.trim().length < 15) {
      nextErrors.mensagem = "Descreva sua demanda com um pouco mais de contexto.";
    }

    if (!data.consentimento) {
      nextErrors.consentimento = "É necessário autorizar o uso dos dados para retorno.";
    }

    return nextErrors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 850));
      if (form.email.includes("+erro")) {
        throw new Error("Falha transitória simulada");
      }
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome completo</Label>
          <Input
            id="nome"
            name="nome"
            value={form.nome}
            onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
            placeholder="Digite seu nome"
            aria-invalid={Boolean(errors.nome)}
          />
          {errors.nome ? <p className="text-sm text-destructive">{errors.nome}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="voce@exemplo.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone / WhatsApp</Label>
          <Input
            id="telefone"
            name="telefone"
            value={form.telefone}
            onChange={(event) => setForm((prev) => ({ ...prev, telefone: event.target.value }))}
            placeholder="(16) 99999-0000"
            aria-invalid={Boolean(errors.telefone)}
          />
          {errors.telefone ? <p className="text-sm text-destructive">{errors.telefone}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="area">Área de interesse</Label>
          <select
            id="area"
            name="area"
            value={form.area}
            onChange={(event) => setForm((prev) => ({ ...prev, area: event.target.value }))}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Selecione uma opção</option>
            <option value="previdenciario">Direito Previdenciário</option>
            <option value="trabalhista">Direito Trabalhista</option>
            <option value="civel">Direito Cível</option>
            <option value="outro">Outro assunto</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea
          id="mensagem"
          name="mensagem"
          value={form.mensagem}
          onChange={(event) => setForm((prev) => ({ ...prev, mensagem: event.target.value }))}
          placeholder="Conte de forma breve o contexto da sua dúvida"
          className="min-h-[140px]"
          aria-invalid={Boolean(errors.mensagem)}
        />
        {errors.mensagem ? <p className="text-sm text-destructive">{errors.mensagem}</p> : null}
      </div>

      <div className="space-y-2">
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/70 bg-muted/40 p-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={form.consentimento}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                consentimento: event.target.checked,
              }))
            }
            className="mt-0.5 size-4 rounded border border-border accent-accent-strong"
          />
          <span>
            Autorizo o uso dos meus dados para retorno de contato, conforme a Política de Privacidade.
          </span>
        </label>
        {errors.consentimento ? <p className="text-sm text-destructive">{errors.consentimento}</p> : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="lg" disabled={!canSubmit || status === "loading"}>
          {status === "loading" ? <LoaderCircle className="size-4 animate-spin" aria-hidden /> : null}
          Enviar mensagem
        </Button>
        <p className="text-sm text-muted-foreground">Retorno em horário comercial.</p>
      </div>

      {status === "success" ? (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <CheckCircle2 className="mt-0.5 size-4" aria-hidden />
          <p>
            Mensagem enviada com sucesso. Nossa equipe vai retornar o contato o mais breve possível.
          </p>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4" aria-hidden />
          <p>Não foi possível enviar no momento. Tente novamente ou utilize o WhatsApp.</p>
        </div>
      ) : null}
    </form>
  );
}
