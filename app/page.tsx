import {ChevronRight} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import {RainbowButton} from "@/components/magicui/rainbow-button";
import {AnimatedGridPattern} from "@/components/magicui/animated-grid-pattern";
import {AnimatedGradientText} from "@/components/magicui/animated-gradient-text";
import {CodeComparison} from "@/components/magicui/code-comparison";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  const beforeCode = `package my.plugin;

import cn.nukkit.command.Command;
import cn.nukkit.command.CommandSender;
import cn.nukkit.event.EventHandler;
import cn.nukkit.event.EventPriority;
import cn.nukkit.event.server.ServerCommandEvent;
import cn.nukkit.plugin.PluginBase;
import cn.nukkit.utils.TextFormat;

public class MyPlugin extends PluginBase {
    @Override
    public void onLoad() {
        this.getLogger().info(TextFormat.GREEN + "onLoad is called");
    }

    @Override
    public void onEnable() {
        this.getLogger().info(TextFormat.DARK_GREEN + "onEnable is called");
        this.getServer().getPluginManager().registerEvents(this, this);
    }

    @Override
    public void onDisable() {
        this.getLogger().info(TextFormat.DARK_RED + "onDisable is called");
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        switch (command.getName()) {
            case "example":
                sender.sendMessage("Hello world!");
                break;
        }
        return true;
    }

    @EventHandler(priority = EventPriority.NORMAL, ignoreCancelled = false)
    public void onServerCommand(ServerCommandEvent event) {
        this.getLogger().info("ServerCommandEvent is called!");
    }
}`;

  const afterCode = `from typing import override

from endstone.command import Command, CommandSender
from endstone.event import event_handler, EventPriority, ServerCommandEvent
from endstone.plugin import Plugin
from endstone import ColorFormat


class MyPlugin(Plugin):
    @override
    def on_load(self) -> None:
        self.logger.info(ColorFormat.GREEN + "on_load is called!")

    @override
    def on_enable(self) -> None:
        self.logger.info(ColorFormat.DARK_GREEN + "on_enable is called!")
        self.register_events(self)
    
    @override
    def on_disable(self) -> None:
        self.logger.info(ColorFormat.DARK_RED + "on_disable is called!")
    
    @override
    def on_command(self, sender: CommandSender, command: Command, args: list[str]) -> bool:
        match command.name:
            case "example":
                sender.send_message("Hello world!")
                break

        return True

    @event_handler(priority=EventPriority.NORMAL, ignore_cancelled=False)
    def on_server_command(self, event: ServerCommandEvent):
        self.logger.info("ServerCommandEvent is called!")

`;

  const faqs = [
    {
      question: "What is Nukkit?",
      answer: "Nukkit was the original Java-based server software for Minecraft: Bedrock Edition, created by Vincent \"MagicDroidX\" Wu. It was designed to be fast, stable, and plugin-friendly. It's now considered a legacy project and is no longer actively maintained by its creator."
    },
    {
      question: "Is Nukkit still maintained?",
      answer: "No. The original Nukkit project has reached end-of-life, and all ongoing work by the creator has moved to its spiritual successor, Endstone."
    },
    {
      question: "What is Endstone?",
      answer: "Endstone is the official spiritual successor to Nukkit, created and maintained by the same author. It provides a high-level plugin API for the Bedrock Dedicated Server (BDS), with first-class support for Python and C++ plugins and full feature parity with vanilla Minecraft. Endstone delivers the same terrain generation, world biomes, AI behavior, and command functionality as the official server, and its API is designed to feel familiar to Nukkit plugin authors."
    },
    {
      question: "What about Cloudburst/Nukkit?",
      answer: "Cloudburst/Nukkit is the community-maintained fork that picked up where Nukkit left off. While the CloudburstMC team keeps the codebase alive under GPL 3.0, they focus on maintenance rather than adding new features or driving major improvements. As a result, Cloudburst/Nukkit still lacks some vanilla Bedrock features (such as terrain generation and mob AI) and often trails behind in adopting updates. Neither the original Nukkit creator nor the Endstone project is affiliated with, or responsible for Cloudburst/Nukkit."
    },
    {
      question: "Which should I choose: Endstone or Cloudburst/Nukkit?",
      answer: "For the fastest access to new Bedrock features, the most accurate vanilla behavior, and official backing from the original author, we strongly recommend Endstone. If you prefer a pure-Java solution with a long-lasting plugin ecosystem and don't mind that some vanilla features are missing, Cloudburst/Nukkit remains an option."
    }
  ];


  return (
    <div>
      <section>
        <div className="relative h-full overflow-hidden py-5 md:py-14">
          <AnimatedGridPattern maxOpacity={0.1}
                               duration={3}
                               className={cn(
                                 "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                                 "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                               )}/>
          <div className="z-10 flex flex-col">
            <div className="mt-20 grid grid-cols-1 md:mt-40">
              <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
                <Link
                  href="https://github.com/EndstoneMC/endstone"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "sm",
                    }),
                    "rounded-full"
                  )}
                >
                  🎉 <Separator className="mx-2 h-4" orientation="vertical"/>
                  Introducing Endstone
                  <ChevronRight className="ml-1 size-4 text-muted-foreground"/>
                </Link>
                <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                  <h1
                    className={cn(
                      "text-black dark:text-white",
                      "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                      "text-balance text-left font-semibold tracking-tighter md:text-center",
                      "text-5xl sm:text-7xl md:text-7xl lg:text-7xl"
                    )}
                  >
                    The <AnimatedGradientText className="font-semibold tracking-tight">next
                    generation</AnimatedGradientText> of
                    Nukkit is here.
                  </h1>
                </div>

                <p
                  className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
                  The legacy Nukkit project has evolved.
                  <br/>
                  Welcome to <b>Endstone</b>, the official spiritual successor to Nukkit.
                </p>

                <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                  <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4 md:justify-center">
                    <RainbowButton className="rounded-xl h-11 px-8 gap-1" asChild>
                      <Link href="https://github.com/EndstoneMC/endstone">
                        Visit Endstone on GitHub
                        <ChevronRight
                          className="size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"/>
                      </Link>
                    </RainbowButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="showcase" className="py-14">
        <div className="flex flex-col w-full max-w-5xl gap-4 py-1 px-7 md:px-10 md:mx-auto">
          <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
            Nukkit ➡️ Endstone
          </h2>
          <h3
            className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
            See how your Nukkit plugin translates into Endstone plugin.
          </h3>
          <div className="relative flex flex-col">
            <CodeComparison
              beforeCode={beforeCode}
              afterCode={afterCode}
              beforeLanguage="java"
              afterLanguage="python"
              beforeFilename="Plugin.java"
              afterFilename="plugin.py"
              beforeDescription="Nukkit"
              afterDescription="Endstone"
              highlightColor="rgba(101, 117, 133, 0.16)"
            />
          </div>
        </div>
      </section>
      <section id="faq" className="py-4">
        <div className="flex flex-col w-full max-w-3xl gap-4 py-1 px-7 md:px-10 md:mx-auto">
          <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
            Frequently Asked Question
          </h2>
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={faq.question}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="py-8">
        <div
          className="flex flex-col w-full max-w-3xl gap-4 py-1 px-7 md:px-10 md:mx-auto">
          <span className="text-muted-foreground text-sm">
              &copy; 2025 Nukkit. All rights reserved.
          </span>
        </div>
      </section>
    </div>
  );
}