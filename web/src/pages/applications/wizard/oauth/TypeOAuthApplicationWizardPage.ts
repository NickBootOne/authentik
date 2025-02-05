import { t } from "@lingui/macro";

import { customElement } from "@lit/reactive-element/decorators/custom-element.js";
import { CSSResult, TemplateResult, html } from "lit";

import AKGlobal from "../../../../authentik.css";
import PFButton from "@patternfly/patternfly/components/Button/button.css";
import PFForm from "@patternfly/patternfly/components/Form/form.css";
import PFRadio from "@patternfly/patternfly/components/Radio/radio.css";
import PFBase from "@patternfly/patternfly/patternfly-base.css";

import { TypeCreate } from "@goauthentik/api";

import "../../../../elements/forms/HorizontalFormElement";
import { WizardPage } from "../../../../elements/wizard/WizardPage";

@customElement("ak-application-wizard-type-oauth")
export class TypeOAuthApplicationWizardPage extends WizardPage {
    applicationTypes: TypeCreate[] = [
        {
            component: "ak-application-wizard-type-oauth-code",
            name: t`Web application`,
            description: t`Applications which handle the authentication server-side (for example, Python, Go, Rust, Java, PHP)`,
            modelName: "",
        },
        {
            component: "ak-application-wizard-type-oauth-implicit",
            name: t`Single-page applications`,
            description: t`Single-page applications which handle authentication in the browser (for example, Javascript, Angular, React, Vue)`,
            modelName: "",
        },
        {
            component: "ak-application-wizard-type-oauth-implicit",
            name: t`Native application`,
            description: t`Applications which redirect users to a non-web callback (for example, Android, iOS)`,
            modelName: "",
        },
        {
            component: "ak-application-wizard-type-oauth-api",
            name: t`API`,
            description: t`Authentication without user interaction, or machine-to-machine authentication.`,
            modelName: "",
        },
    ];

    static get styles(): CSSResult[] {
        return [PFBase, PFButton, PFForm, PFRadio, AKGlobal];
    }

    sidebarLabel = () => t`Application type`;

    render(): TemplateResult {
        return html`<form class="pf-c-form pf-m-horizontal">
            ${this.applicationTypes.map((type) => {
                return html`<div class="pf-c-radio">
                    <input
                        class="pf-c-radio__input"
                        type="radio"
                        name="type"
                        id=${type.component}
                        @change=${() => {
                            this.host.steps = [
                                "ak-application-wizard-initial",
                                "ak-application-wizard-type",
                                "ak-application-wizard-type-oauth",
                                type.component,
                            ];
                            this.host.state["oauth-type"] = type.component;
                            this.host.isValid = true;
                        }}
                    />
                    <label class="pf-c-radio__label" for=${type.component}>${type.name}</label>
                    <span class="pf-c-radio__description">${type.description}</span>
                </div>`;
            })}
        </form> `;
    }
}
