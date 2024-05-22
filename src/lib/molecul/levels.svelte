<script>
    import { SvgCost, SvgHeart, SvgRisk } from '$lib';
    </script>
    
    <section class="status-section">
        <h2 class="status-title">Status wens</h2>
        
        <div class="info-item">
            <p class="info-label">Risiconiveau:</p>
            <SvgRisk />
        </div>
        
        <div class="info-item">
            <p class="info-label">Kostenindicatie:</p>
            <SvgCost />
        </div>
        
        <div class="info-item support">
            <SvgHeart />
            <p class="support-text">19 personen vinden dit een goed idee</p>
        </div>
    </section>

<style>
    .info-item {
        display: flex;
        align-items: center;
    }

    .info-label {
        margin-right: 10px;
    }

    .support-text {
        margin-left: 5px;
    }
</style>
