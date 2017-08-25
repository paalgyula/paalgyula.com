package com.paalgyula;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.lang.UsesJava7;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale;
import java.util.Map;

public class LocaleChangeInterceptor extends HandlerInterceptorAdapter {

    protected final Log logger = LogFactory.getLog(getClass());

    private String[] httpMethods;

    private boolean ignoreInvalidLocale = false;

    private boolean languageTagCompliant = false;

    /**
     * Configure the HTTP method(s) over which the locale can be changed.
     *
     * @param httpMethods the methods
     * @since 4.2
     */
    public void setHttpMethods(String... httpMethods) {
        this.httpMethods = httpMethods;
    }

    /**
     * Return the configured HTTP methods.
     *
     * @since 4.2
     */
    public String[] getHttpMethods() {
        return this.httpMethods;
    }

    /**
     * Set whether to ignore an invalid value for the locale parameter.
     *
     * @since 4.2.2
     */
    public void setIgnoreInvalidLocale(boolean ignoreInvalidLocale) {
        this.ignoreInvalidLocale = ignoreInvalidLocale;
    }

    /**
     * Return whether to ignore an invalid value for the locale parameter.
     *
     * @since 4.2.2
     */
    public boolean isIgnoreInvalidLocale() {
        return this.ignoreInvalidLocale;
    }

    /**
     * Specify whether to parse request parameter values as BCP 47 language tags
     * instead of Java's legacy locale specification format.
     * The default is {@code false}.
     * <p>Note: This mode requires JDK 7 or higher. Set this flag to {@code true}
     * for BCP 47 compliance on JDK 7+ only.
     *
     * @see Locale#forLanguageTag(String)
     * @see Locale#toLanguageTag()
     * @since 4.3
     */
    public void setLanguageTagCompliant(boolean languageTagCompliant) {
        this.languageTagCompliant = languageTagCompliant;
    }

    /**
     * Return whether to use BCP 47 language tags instead of Java's legacy
     * locale specification format.
     *
     * @since 4.3
     */
    public boolean isLanguageTagCompliant() {
        return this.languageTagCompliant;
    }


    @Override
    @SuppressWarnings("unchecked")
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws ServletException {

        Map<String, String> pathVariables = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);

        String newLocale = pathVariables.getOrDefault("lang", "hu");

        if (newLocale != null) {
            if (checkHttpMethod(request.getMethod())) {
                LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
                if (localeResolver == null) {
                    throw new IllegalStateException(
                            "No LocaleResolver found: not in a DispatcherServlet request?");
                }
                try {
                    localeResolver.setLocale(request, response, parseLocaleValue(newLocale));
                } catch (IllegalArgumentException ex) {
                    if (isIgnoreInvalidLocale()) {
                        logger.debug("Ignoring invalid locale value [" + newLocale + "]: " + ex.getMessage());
                    } else {
                        throw ex;
                    }
                }
            }
        }
        // Proceed in any case.
        return true;
    }

    private boolean checkHttpMethod(String currentMethod) {
        String[] configuredMethods = getHttpMethods();
        if (ObjectUtils.isEmpty(configuredMethods)) {
            return true;
        }
        for (String configuredMethod : configuredMethods) {
            if (configuredMethod.equalsIgnoreCase(currentMethod)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Parse the given locale value as coming from a request parameter.
     * <p>The default implementation calls {@link StringUtils#parseLocaleString(String)}
     * or JDK 7's {@link Locale#forLanguageTag(String)}, depending on the
     * {@link #setLanguageTagCompliant "languageTagCompliant"} configuration property.
     *
     * @param locale the locale value to parse
     * @return the corresponding {@code Locale} instance
     * @since 4.3
     */
    @UsesJava7
    private Locale parseLocaleValue(String locale) {
        return (isLanguageTagCompliant() ? Locale.forLanguageTag(locale) : StringUtils.parseLocaleString(locale));
    }

}
